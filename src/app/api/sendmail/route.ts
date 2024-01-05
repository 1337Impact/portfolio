// import transporter from "@/utils/transporter";
import schema from "@/utils/zod";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const req = await request.json();
    const body = schema.parse(req);
    console.log(body);
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
          if (error) {
              console.log(error);
              reject(error);
          } else {
              console.log("Server is ready to take our messages");
              resolve(success);
          }
      });
  });

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(
        {
          from: '"benkhattab.me" <mohamaedbenk@hotmail.com>',
          to: "mobenkhattab@gmail.com",
          subject: body.subject,
          text: `by: "${body.name}"\n${body.message}`,
        },
        (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            console.log(info);
            resolve(info);
          }
        },
      );
    });
    return Response.json({ message: "success" });
  } catch (e) {
    console.log("Error:", e);
    return new Response("Bad Request", { status: 400 });
  }
}
