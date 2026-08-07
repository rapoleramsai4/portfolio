import { NextRequest, NextResponse } from "next/server";

// TODO(user): this is a stub handler — it validates and logs submissions but
// does not deliver email anywhere. Wire up a real backend before going live,
// e.g. your own Web3Forms/Formspree access key, Resend, or a Cloudflare
// Email Routing + Queues pipeline. Do NOT reuse anyone else's form access key.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !message.trim() ||
    !EMAIL_RE.test(email)
  ) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  // Visible in `wrangler dev` / Workers logs until a real backend is wired up.
  console.log("Contact form submission:", { name, email, message });

  return NextResponse.json({ ok: true });
}
