import schema from "@/utils/zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const req = await request.json();
    const body = schema.parse(req);
    console.log(body);
    const { data, error } = await resend.emails.send({
      from: "benkhattab.me <onboarding@resend.dev>",
      to: "mobenkhattab@gmail.com",
      subject: `${body.subject}`,
      text: `Sent by: "${body.name}" Email: "${body.email}"\n\n${body.message}`,
    });
    if (error) {
      throw new Error("Bad Request");
    }
    return Response.json({ message: "success" });
  } catch (e) {
    console.log("Error:", e);
    return new Response("Bad Request", { status: 400 });
  }
}
