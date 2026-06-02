// TEMPORARY diagnostic — prints the SUPABASE_DB_URL host and the server's TLS
// certificate chain so we can choose the right verification strategy.
// It performs a bare TLS handshake and immediately disconnects: NO database
// auth, NO password is ever transmitted. rejectUnauthorized:false here is only
// to let the handshake complete far enough to read the presented chain.
// Delete this file and its workflow step once SSL is sorted.
import tls from "node:tls";

const url = process.env.SUPABASE_DB_URL;
if (!url) {
  console.log("SUPABASE_DB_URL not set — nothing to diagnose.");
  process.exit(0);
}

const u = new URL(url);
const host = u.hostname;
const port = Number(u.port) || 5432;
console.log("HOST:", host);
console.log("PORT:", port);
console.log("USER:", u.username); // not sensitive (postgres / postgres.<ref>)
console.log("PASSWORD present:", Boolean(u.password));

const socket = tls.connect(
  { host, port, servername: host, rejectUnauthorized: false },
  () => {
    console.log("TLS connected. authorized:", socket.authorized);
    console.log("authorizationError:", socket.authorizationError);
    let cert = socket.getPeerCertificate(true);
    const seen = new Set();
    let depth = 0;
    while (cert && cert.subject && !seen.has(cert.fingerprint256)) {
      seen.add(cert.fingerprint256);
      console.log(
        `CHAIN[${depth}] subject.CN=${JSON.stringify(cert.subject?.CN)} ` +
          `issuer.CN=${JSON.stringify(cert.issuer?.CN)} ` +
          `selfSigned=${cert.subject?.CN === cert.issuer?.CN}`,
      );
      cert = cert.issuerCertificate;
      depth++;
    }
    socket.end();
    process.exit(0);
  },
);
socket.on("error", (e) => {
  console.log("TLS ERROR:", e.message);
  process.exit(0);
});
socket.setTimeout(15000, () => {
  console.log("TLS TIMEOUT — host may be unreachable (e.g. IPv6-only direct endpoint from IPv4 CI)");
  process.exit(0);
});
