import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  if (!name || typeof name !== "string" || name.trim() === "") {
    return NextResponse.json({ error: "Invalid name" }, { status: 400 });
  }
  if (!email || typeof email !== "string" || !emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (!message || typeof message !== "string" || message.trim() === "") {
    return NextResponse.json({ error: "Invalid message" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: "contact@tusktrade.com",
    to: "contact@tusktrade.com",
    subject: `Message from ${name} (${email})`,
    text: message,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Email sent" });
}
