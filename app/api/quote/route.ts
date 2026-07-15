import { Resend } from "resend";

type QuotePayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
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
    !isNonEmptyString(data.service) ||
    !isNonEmptyString(data.message)
  ) {
    return null;
  }

  return {
    name: data.name.trim(),
    email: data.email.trim(),
    phone: isNonEmptyString(data.phone) ? data.phone.trim() : undefined,
    company: isNonEmptyString(data.company) ? data.company.trim() : undefined,
    service: data.service.trim(),
    budget: isNonEmptyString(data.budget) ? data.budget.trim() : undefined,
    message: data.message.trim(),
  };
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to =
    process.env.CONTACT_EMAIL ?? process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Fetan Advertising <onboarding@resend.dev>";

  if (!apiKey || !to) {
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
      { error: "Please fill in name, email, service, and project details." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject: `Quote request — ${payload.service} — ${payload.name}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone ?? "—"}`,
      `Company: ${payload.company ?? "—"}`,
      `Service: ${payload.service}`,
      `Budget: ${payload.budget ?? "—"}`,
      "",
      "Project details:",
      payload.message,
    ].join("\n"),
  });

  if (error) {
    return Response.json(
      { error: error.message || "Failed to send quote email." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
