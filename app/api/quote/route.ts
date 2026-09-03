import nodemailer from "nodemailer";

/* ── Payload type (unchanged) ── */
type QuotePayload = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
};

/* ── Helpers ── */
function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function parsePayload(body: unknown): QuotePayload | null {
  if (!body || typeof body !== "object") return null;
  const data = body as Record<string, unknown>;

  if (
    !isNonEmptyString(data.name) ||
    !isNonEmptyString(data.email) ||
    !isNonEmptyString(data.phone) ||
    !isNonEmptyString(data.service) ||
    !isNonEmptyString(data.message)
  ) {
    return null;
  }

  const email = (data.email as string).trim();
  if (!EMAIL_RE.test(email)) return null;

  return {
    name: (data.name as string).trim(),
    email,
    phone: (data.phone as string).trim(),
    company: isNonEmptyString(data.company) ? (data.company as string).trim() : undefined,
    service: (data.service as string).trim(),
    message: (data.message as string).trim(),
  };
}

/* ── Escaped helper for HTML injection prevention ── */
function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ── Build the HTML email sent to the Fetan team ── */
function buildInternalHtml(p: QuotePayload): string {
  const rows = [
    ["Name", p.name],
    ["Email", p.email],
    ["Phone", p.phone],
    ["Company", p.company ?? "—"],
    ["Service", p.service],
  ];

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 100%);padding:28px 32px;">
            <h1 style="margin:0;font-size:20px;color:#ffffff;letter-spacing:0.5px;">New Quote Request</h1>
            <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.7);">via fetanadvertising.com</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:28px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              ${rows
                .map(
                  ([label, val]) => `
              <tr>
                <td style="padding:10px 12px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;width:110px;border-bottom:1px solid #f0f0f0;">${esc(label)}</td>
                <td style="padding:10px 12px;font-size:14px;color:#111827;border-bottom:1px solid #f0f0f0;">${esc(val)}</td>
              </tr>`
                )
                .join("")}
            </table>

            <div style="margin-top:24px;">
              <p style="margin:0 0 6px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;">Project Details</p>
              <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;font-size:14px;line-height:1.65;color:#374151;white-space:pre-wrap;">${esc(p.message)}</div>
            </div>

            <p style="margin-top:28px;font-size:12px;color:#9ca3af;text-align:center;">
              Reply directly to this email to reach <strong>${esc(p.name)}</strong> at <a href="mailto:${esc(p.email)}" style="color:#2563eb;">${esc(p.email)}</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();
}

/* ── Build the auto-confirmation email sent to the client ── */
function buildConfirmationHtml(p: QuotePayload): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 100%);padding:28px 32px;text-align:center;">
            <h1 style="margin:0;font-size:22px;color:#ffffff;">Fetan Advertising</h1>
            <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.7);">Full Service Creative Agency</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <p style="margin:0 0 4px;font-size:16px;color:#111827;">Hi ${esc(p.name)},</p>
            <p style="margin:0 0 20px;font-size:14px;line-height:1.7;color:#4b5563;">
              Thank you for reaching out! We've received your quote request for <strong>${esc(p.service)}</strong> and our team is already reviewing it.
            </p>
            <p style="margin:0 0 20px;font-size:14px;line-height:1.7;color:#4b5563;">
              We typically respond within <strong>one business day</strong>. If your project is urgent, feel free to call us directly or reach out via WhatsApp.
            </p>

            <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;margin-bottom:24px;">
              <p style="margin:0 0 8px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;">What you submitted</p>
              <p style="margin:0;font-size:13px;color:#374151;line-height:1.6;">
                <strong>Service:</strong> ${esc(p.service)}<br/>
                <strong>Company:</strong> ${esc(p.company ?? "—")}<br/>
                <strong>Details:</strong> ${esc(p.message.length > 120 ? p.message.slice(0, 120) + "…" : p.message)}
              </p>
            </div>

            <table width="100%" cellpadding="0" cellspacing="0">
              <tr><td align="center">
                <a href="https://fetanadvertising.com/#contact" style="display:inline-block;background:#1a1a2e;color:#ffffff;font-size:13px;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:8px;letter-spacing:0.04em;">VISIT OUR WEBSITE</a>
              </td></tr>
            </table>

            <p style="margin:28px 0 0;font-size:12px;color:#9ca3af;text-align:center;">
              © ${new Date().getFullYear()} Fetan Advertising · Haile Gebre Silase St, Addis Ababa
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();
}

/* ── POST handler ── */
export async function POST(request: Request) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT ?? "587", 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_EMAIL ?? "contact@fetanadvertising.com";
  const from =
    process.env.SMTP_FROM_EMAIL ?? `Fetan Advertising <${smtpUser}>`;

  if (!smtpHost || !smtpUser || !smtpPass) {
    return Response.json(
      { error: "Email is not configured on the server." },
      { status: 500 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const payload = parsePayload(json);
  if (!payload) {
    return Response.json(
      { error: "Please fill in name, email, phone, service, and project details." },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    /* ── 1. Internal notification to the Fetan team ── */
    await transporter.sendMail({
      from,
      to,
      replyTo: payload.email,
      subject: `New Quote Request — ${payload.service} — ${payload.name}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone}`,
        `Company: ${payload.company ?? "—"}`,
        `Service: ${payload.service}`,
        "",
        "Project details:",
        payload.message,
      ].join("\n"),
      html: buildInternalHtml(payload),
    });

    /* ── 2. Auto-confirmation to the client ── */
    await transporter.sendMail({
      from,
      to: payload.email,
      subject: `We received your quote request — Fetan Advertising`,
      text: [
        `Hi ${payload.name},`,
        "",
        `Thank you for reaching out! We've received your quote request for ${payload.service} and our team is already reviewing it.`,
        "",
        "We typically respond within one business day.",
        "",
        "— Fetan Advertising",
        "https://fetanadvertising.com",
      ].join("\n"),
      html: buildConfirmationHtml(payload),
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to send quote email.";
    return Response.json({ error: message }, { status: 502 });
  }

  return Response.json({ ok: true });
}
