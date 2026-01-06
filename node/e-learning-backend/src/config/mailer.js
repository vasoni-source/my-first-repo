import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify((err) => {
  if (err) {
    console.error("Brevo SMTP error:", err.message);
  } else {
    console.log("Brevo SMTP ready 🚀");
  }
});

export const sendWelcomeEmail = async (to, name) => {
  console.log("inside send email fn")
  await transporter.sendMail({
    from: `E-Learning App <${process.env.EMAIL_FROM}>`,
    to,
    subject: "Registration Successful 🎉",
    html: `
      <h2>Hello ${name}</h2>
      <p>You are successfully registered.</p>
    `,
  });
};


// export const sendWelcomeEmail = async (to, name) => {
//   await transporter.sendMail({
//     from: "E-Learning App <no-reply@elearning.com>",
//     to,
//     subject: "Registration Successful 🎉",
//     html: `
//       <h2>Hello ${name}</h2>
//       <p>You have been successfully registered.</p>
//     `,
//   });
// };


