// TEMPORARY diagnostic — negotiates Postgres SSL (SSLRequest), then dumps the
// server's certificate chain as PEM so we can commit + pin the correct CA.
// No DB auth is performed: we stop right after the TLS handshake, so NO password
// is ever sent. rejectUnauthorized:false is only to complete the handshake far
// enough to read the presented chain. Delete this file + its workflow step after.
import net from "node:net";
import tls from "node:tls";

const url = process.env.SUPABASE_DB_URL;
if (!url) {
  console.log("SUPABASE_DB_URL not set.");
  process.exit(0);
}
const u = new URL(url);
const host = u.hostname;
const port = Number(u.port) || 5432;
console.log("HOST:", host, "PORT:", port, "USER:", u.username);

const sock = net.connect(port, host, () => {
  const req = Buffer.alloc(8);
  req.writeInt32BE(8, 0);
  req.writeInt32BE(80877103, 4); // PostgreSQL SSLRequest magic
  sock.write(req);
});

sock.once("data", (d) => {
  const reply = String.fromCharCode(d[0]);
  console.log("SSLRequest reply:", reply, reply === "S" ? "(SSL supported)" : "(refused)");
  if (reply !== "S") {
    sock.end();
    process.exit(0);
  }
  const secure = tls.connect(
    { socket: sock, servername: host, rejectUnauthorized: false },
    () => {
      console.log("TLS handshake ok. authorized:", secure.authorized, "err:", secure.authorizationError);
      let cert = secure.getPeerCertificate(true);
      const seen = new Set();
      let i = 0;
      while (cert && cert.subject && !seen.has(cert.fingerprint256)) {
        seen.add(cert.fingerprint256);
        const selfSigned = cert.subject?.CN === cert.issuer?.CN;
        console.log(`CHAIN[${i}] subject.CN=${JSON.stringify(cert.subject?.CN)} issuer.CN=${JSON.stringify(cert.issuer?.CN)} selfSigned=${selfSigned}`);
        const pem = cert.raw.toString("base64").match(/.{1,64}/g).join("\n");
        console.log(`---PEM[${i}]-BEGIN---`);
        console.log("-----BEGIN CERTIFICATE-----");
        console.log(pem);
        console.log("-----END CERTIFICATE-----");
        console.log(`---PEM[${i}]-END---`);
        cert = cert.issuerCertificate;
        i++;
      }
      secure.end();
      process.exit(0);
    },
  );
  secure.on("error", (e) => {
    console.log("TLS ERROR:", e.message);
    process.exit(0);
  });
});

sock.on("error", (e) => {
  console.log("SOCKET ERROR:", e.message);
  process.exit(0);
});
sock.setTimeout(15000, () => {
  console.log("TIMEOUT");
  process.exit(0);
});
