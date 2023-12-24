import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST as string,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASS,
    },
  });
  const info = await transporter.sendMail({
    from: process.env.SMTP_EMAIL,
    to: "mobenkhattab@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });
  console.log("Message sent: %s", info.messageId);

//   const req = await request.json();
//   console.log(req);
  return Response.json({ message: "Hello World" });
}
