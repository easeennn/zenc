import { NextResponse } from "next/server";
import { validateInquiry } from "@/lib/contact";

/**
 * Inquiry intake — the single integration point for the contact form.
 *
 * Behaviour:
 *  - invalid payload            → 422 with field errors
 *  - honeypot filled (bots)     → 200, silently dropped
 *  - CONTACT_WEBHOOK_URL unset  → 501 "not_configured". The form then tells the
 *                                 visitor their message was NOT sent. We never
 *                                 fake a success.
 *  - webhook configured         → forwards validated JSON, 200 on success, 502 on failure
 *
 * To use an email provider (Resend, Postmark, SES…) replace the `fetch` below
 * with that provider's SDK call, reading the API key from a server-only
 * environment variable. Never expose keys to client code.
 */
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, code: "bad_request" }, { status: 400 });
  }

  const result = validateInquiry(body);
  if (!result.ok) {
    return NextResponse.json({ ok: false, code: "invalid", errors: result.errors }, { status: 422 });
  }
  if (result.honeypot) return NextResponse.json({ ok: true });

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ ok: false, code: "not_configured" }, { status: 501 });
  }

  try {
    const { website: _honeypot, ...inquiry } = result.data;
    void _honeypot;
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ source: "zen-c-website", receivedAt: new Date().toISOString(), ...inquiry }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, code: "delivery_failed" }, { status: 502 });
  }
}
