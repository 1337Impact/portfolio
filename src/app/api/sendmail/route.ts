import transporter from "@/utils/transporter";
import schema from "@/utils/zod";

export async function POST(request: Request) {
  try {
    console.log(request.body);
    const req = await request.json();
    const body = schema.parse(req);
    console.log(body);

    const info = await transporter.sendMail({
      from: '"benkhattab.me" <mohamaedbenk@hotmail.com>',
      to: "mobenkhattab@gmail.com",
      subject: body.subject,
      text: `by: "${body.name}"\n${body.message}`,
    });
    console.log("info:", info);
    
    return Response.json({ message: "success" });
  } catch (e) {
    console.log("Error:", e);
    return new Response("Bad Request", { status: 400 });
  }
}
