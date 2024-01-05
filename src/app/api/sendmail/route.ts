import schema from "@/app/api/config/zod";
import { Resend } from "resend";
import { ipLimiters, ipRateLimiter } from "../config/limiter";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {

  if ((await ipRateLimiter(ipLimiters, request)) < 1) {
    return new Response("Too many requests", { status: 429 });
  }

  try {
    const body = await request.json();
    const res = schema.safeParse(body);
    if (!res.success) {
      return new Response("Email parsing failed", { status: 400 });
    }
    console.log(body);

    const { error } = await resend.emails.send({
      from: "benkhattab.me <onboarding@resend.dev>",
      to: "mobenkhattab@gmail.com",
      subject: `${body.subject}`,
      text: `Sent by: "${body.name}" Email: "${body.email}"\n\n${body.message}`,
    });
    if (error) {
      return new Response("Error sending email", { status: 400 });
    }

    return Response.json({ message: "success" });
  } catch (e) {
    console.log("Error:", e);
    return new Response("Bad Request", { status: 400 });
  }
}
