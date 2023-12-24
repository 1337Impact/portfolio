import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const transporter = nodemailer.createTransport({
    host: "smtp.postmarkapp.com",
    port: 25,
    secure: true,
    auth: {
      user: "158609e6-a51d-416f-93ae-2491232c355a",
      pass: "158609e6-a51d-416f-93ae-2491232c355a",
    },
  });
  const info = await transporter.sendMail({
    from: '"mohammed" <158609e6-a51d-416f-93ae-2491232c355a>',
    to: "mbenkhat@student.1337.ma",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });
  console.log("Message sent: %s", info.messageId);

//   const req = await request.json();
//   console.log(req);
  return Response.json({ message: "Hello World" });
}
