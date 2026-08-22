import nodemailer from "nodemailer";

type QuotePayload = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

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

  return {
    name: data.name.trim(),
    email: data.email.trim(),
    phone: data.phone.trim(),
    company: isNonEmptyString(data.company) ? data.company.trim() : undefined,
    service: data.service.trim(),
    message: data.message.trim(),
  };
}

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
    await transporter.sendMail({
      from,
      to,
      replyTo: payload.email,
      subject: `New Sales Lead — ${payload.service} — ${payload.name}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone ?? "—"}`,
        `Company: ${payload.company ?? "—"}`,
        `Service: ${payload.service}`,
        "",
        "Project details:",
        payload.message,
      ].join("\n"),
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to send quote email.";
    return Response.json({ error: message }, { status: 502 });
  }

  return Response.json({ ok: true });
}
