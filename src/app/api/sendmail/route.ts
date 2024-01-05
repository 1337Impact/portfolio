import schema from "@/utils/zod";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const req = await request.json();
    const body = schema.parse(req);
    console.log(body);
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,  
      },
      body: JSON.stringify({
        from: "benkhattab.me <onboarding@resend.dev>",
        to: "mobenkhattab@gmail.com",
        subject: `${body.subject}`,
        text: `Sent by: "${body.name}" Email: "${body.email}"\n\n${body.message}`,
      }),
    });
    if (!res.ok) {
      throw new Error("Bad Request");
    }
    return Response.json({ message: "success" });
  } catch (e) {
    console.log("Error:", e);
    return new Response("Bad Request", { status: 400 });
  }
}
