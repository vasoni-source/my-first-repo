import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: Number(process.env.MAILTRAP_PORT),
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

transporter.verify((err) => {
  if (err) {
    console.error("Mailtrap connection error:", err.message);
  } else {
    console.log("Mailtrap is ready 📩");
  }
});

export const sendWelcomeEmail = async (to, name) => {
  await transporter.sendMail({
    from: "E-Learning App <no-reply@elearning.com>",
    to,
    subject: "Registration Successful 🎉",
    html: `
      <h2>Hello ${name}</h2>
      <p>You have been successfully registered.</p>
    `,
  });
};


