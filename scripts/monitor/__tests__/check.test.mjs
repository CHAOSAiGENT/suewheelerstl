import { describe, it, expect, vi, afterEach } from "vitest";
import { checkHealth, formatAlert, sendAlerts } from "../check.mjs";

describe("checkHealth", () => {
  it("returns ok on a 200 + {ok:true} body", async () => {
    const fakeFetch = async () => ({
      ok: true,
      status: 200,
      json: async () => ({ ok: true, dbWriteMs: 12 }),
    });
    const result = await checkHealth(fakeFetch, { retries: 0, backoffMs: 0 });
    expect(result.ok).toBe(true);
    expect(result.status).toBe(200);
  });

  it("retries then fails on persistent 500", async () => {
    let calls = 0;
    const fakeFetch = async () => {
      calls++;
      return { ok: false, status: 500, json: async () => ({ ok: false, error: "boom" }) };
    };
    const result = await checkHealth(fakeFetch, { retries: 2, backoffMs: 0 });
    expect(result.ok).toBe(false);
    expect(result.status).toBe(500);
    expect(calls).toBe(3); // initial + 2 retries
  });

  it("treats a thrown fetch (site down) as failure", async () => {
    const fakeFetch = async () => {
      throw new Error("ECONNREFUSED");
    };
    const result = await checkHealth(fakeFetch, { retries: 0, backoffMs: 0 });
    expect(result.ok).toBe(false);
    expect(result.status).toBe(0);
  });
});

describe("formatAlert", () => {
  it("includes status, detail, and run url", () => {
    const msg = formatAlert(
      { ok: false, status: 500, body: { error: "insert: boom" } },
      "https://example.com/run/1",
    );
    expect(msg).toContain("500");
    expect(msg).toContain("insert: boom");
    expect(msg).toContain("https://example.com/run/1");
  });
});

describe("ntfy alert channel", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  // Silences every channel; each test re-arms only what it is asserting on.
  function disarmAllChannels() {
    for (const key of [
      "RESEND_API_KEY",
      "ALERT_EMAIL_TO",
      "TWILIO_ACCOUNT_SID",
      "TWILIO_AUTH_TOKEN",
      "TWILIO_FROM",
      "ALERT_SMS_TO",
      "SLACK_WEBHOOK_URL",
      "NTFY_TOPIC",
      "NTFY_SERVER",
      "NTFY_TOKEN",
    ]) {
      vi.stubEnv(key, "");
    }
  }

  function stubFetch(impl) {
    const fetchMock = vi.fn(impl ?? (async () => ({ ok: true, status: 200 })));
    vi.stubGlobal("fetch", fetchMock);
    return fetchMock;
  }

  it("skips silently when NTFY_TOPIC is unset", async () => {
    disarmAllChannels();
    const fetchMock = stubFetch();
    await sendAlerts("boom");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("POSTs to ntfy.sh with the alert text and urgent headers when configured", async () => {
    disarmAllChannels();
    vi.stubEnv("NTFY_TOPIC", "sue-wheeler-abc123");
    const fetchMock = stubFetch();
    await sendAlerts("form is down");

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://ntfy.sh/sue-wheeler-abc123");
    expect(init.method).toBe("POST");
    expect(init.body).toBe("form is down");
    expect(init.headers.Title).toContain("Sue Wheeler");
    expect(init.headers.Priority).toBe("urgent");
    expect(init.headers.Tags).toBe("rotating_light");
  });

  it("honours a NTFY_SERVER override for self-hosted instances", async () => {
    disarmAllChannels();
    vi.stubEnv("NTFY_TOPIC", "topic-x");
    vi.stubEnv("NTFY_SERVER", "https://ntfy.example.com");
    const fetchMock = stubFetch();
    await sendAlerts("boom");
    expect(fetchMock.mock.calls[0][0]).toBe("https://ntfy.example.com/topic-x");
  });

  it("omits Authorization unless NTFY_TOKEN is set", async () => {
    disarmAllChannels();
    vi.stubEnv("NTFY_TOPIC", "topic-x");
    const noToken = stubFetch();
    await sendAlerts("boom");
    expect(noToken.mock.calls[0][1].headers.Authorization).toBeUndefined();

    vi.stubEnv("NTFY_TOKEN", "tk_secret");
    const withToken = stubFetch();
    await sendAlerts("boom");
    expect(withToken.mock.calls[0][1].headers.Authorization).toBe("Bearer tk_secret");
  });

  it("a failing ntfy request does not suppress the other channels", async () => {
    disarmAllChannels();
    vi.stubEnv("NTFY_TOPIC", "topic-x");
    vi.stubEnv("SLACK_WEBHOOK_URL", "https://hooks.slack.test/abc");
    vi.stubEnv("RESEND_API_KEY", "re_test");
    vi.stubEnv("ALERT_EMAIL_TO", "alerts@example.com");

    const fetchMock = stubFetch(async (url) => {
      if (String(url).startsWith("https://ntfy.sh/")) throw new Error("ntfy unreachable");
      return { ok: true, status: 200 };
    });
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    await expect(sendAlerts("boom")).resolves.toBeUndefined();

    const targets = fetchMock.mock.calls.map((c) => String(c[0]));
    expect(targets).toContain("https://api.resend.com/emails");
    expect(targets).toContain("https://hooks.slack.test/abc");
    expect(errorSpy).toHaveBeenCalledWith(
      "[monitor] alert channel 'ntfy' failed:",
      expect.any(Error),
    );
    errorSpy.mockRestore();
  });
});
