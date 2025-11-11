import mongoose from "mongoose";
import userSchema from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import speakeasy from "speakeasy";
import nodemailer from "nodemailer";
import Otp from "../model/otp.js";
import crypto from "crypto";
const User = mongoose.model("User", userSchema);
const getUser = async (req, res) => {
  // res.send('Getting all the user')
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// create all the remaining controllers

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//  add users and verify otp

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vaibhavisoni54@gmail.com",
    pass: "zfrv aapy onkb zikg",
  },
});

const generateOtp = () => {
  return speakeasy.totp({
    secret: "vs",
    encoding: "base32",
  });
};
export const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    const otp = generateOtp();
    await Otp.create({ email, otp });

    await transporter.sendMail({
      from: `"OTP Service" <vaibhavisoni54@gmail.com>`,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is: ${otp}. It will expire in 2 minutes.`,
    });

    res.json({ message: "OTP sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send OTP" });
  }
};
export const verifyOtpAndCreateUser = async (req, res) => {
  console.log("inside verifyotpandcreateuser");
  try {
    console.log("inside try block");
    const { name, email, password, role, otp } = req.body;
    const otpRecord = await Otp.findOne({ email }).sort({ createdAt: -1 });
    if (!otpRecord)
      return res.status(400).json({ error: "OTP not found or expired" });
    console.log("otp record", otpRecord);
    if (otpRecord.otp !== otp) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: role || "user",
    });
    const savedUser = await newUser.save();

    await Otp.deleteMany({ email });

    res.status(201).json({
      message: "User created successfully after OTP verification",
      user: savedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// const addUser = async (req, res) => {
//   try {
//     const password = req.body.password;
//     const hashedPaasword = await bcrypt.hash(password,10)
//     const newUser = new User({
//       name: req.body.name,
//       email: req.body.email,
//       // age: req.body.age,
//       password:hashedPaasword,
//       role:req.body.role
//     });
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (error) {
//     console.log("Error: ", error);
//     res.status(400).json({ massage: error.message });
//   }
// };
const loginUser = async (req, res) => {
  try {
    const name = req.body.name;
    const password = req.body.password;
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const token = jwt.sign({ userId: user._id }, "vs", { expiresIn: "12h" });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};
const loginUserWithOtp = async (req, res) => {
  try {
    // const name = req.body.name;
    const otp = req.body.otp;
    const email = req.body.email;
    const user = await User.findOne({ email });
    const otpRecord = await Otp.findOne({ email });
    console.log("user", user);
    if (!user) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    if (!otpRecord) {
      return res.status(400).json({ error: "OTP not found or Expired" });
    }
    console.log("otpRecord", otpRecord);
    console.log("otp from user", otp);
    if (otpRecord.otp !== otp) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const token = jwt.sign({ userId: user._id }, "vs", { expiresIn: "12h" });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: "Authentication failed" });
  }
  const token = await crypto.randomBytes(20).toString("hex");
  user.resetToken = token;
  const mailOptions = {
    from: "vaibhavisoni54@gmail.com",
    to: email,
    subject: "Password Reset",
    text: `Click the following link to reset your password: http://localhost:5000/user/reset-password/${token}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("error sending mail");
    } else {
      console.log(`Email sent : ${info.response}`);
      res
        .status(200)
        .send("Check your email for instructions on resetting your password");
    }
  });
};
const passwordReset = async (req, res) => {
  const { token } = req.params;
  const users = await User.find({});
  // console.log("all users from paswordreset", users);
  if (users.some((user) => user.resetToken === token)) {
    res.send(
      `<form method=post action="/reset-password"> <input type="password" name="password" required> <input type="submit" value="Reset Password"></form>`
    );
  }
  else{
    res.status(404).send("Invalid or expired token")
  }
};
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndUpdate(
      userId,
      { name: req.body.name, email: req.body.email, age: req.body.age },
      { new: true }
    );
    if (!user) {
      res.status(400).send("id is required");
    }
    res.status(200).json(user);
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).json({ massage: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      res.status(400).send("id is required");
    }
    res.status(200).json(user);
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).json({ massage: error.message });
  }
};
export {
  getUser,
  updateUser,
  deleteUser,
  getUserById,
  loginUser,
  loginUserWithOtp,
  forgotPassword,
  passwordReset
};
