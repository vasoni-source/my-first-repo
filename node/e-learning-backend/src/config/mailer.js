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
    // console.log("Brevo SMTP ready ");
  }
});

export const sendWelcomeEmail = async (to, name) => {
  console.log("inside send email fn")
  await transporter.sendMail({
    from: `E-Learning App <${process.env.EMAIL_FROM}>`,
    to,
    subject: "Registration Successful ",
    html: `
      <h2>Hello ${name}</h2>
      <p>You are successfully registered.</p>
    `,
  });
};
export const sendResetPasswordEmail = async (to, resetUrl) => {
  await transporter.sendMail({
    from: `E-Learning App <${process.env.EMAIL_FROM}>`,
    to,
    subject: "Reset Your Password",
    html: `
      <p>You requested a password reset</p>
      <p>Click below to reset:</p>
      <a href="${resetUrl}">Reset Password</a>
      <p>This link expires in 10 minutes.</p>
    `,
  });
};



