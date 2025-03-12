import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { answers } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "user@example.com",
      subject: "Your Leadership Quiz Results",
      text: `Here are your responses: ${JSON.stringify(answers, null, 2)}`
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error sending email", error }, { status: 500 });
  }
}
