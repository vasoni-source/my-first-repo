import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { sendWelcomeEmail } from "../config/mailer.js";

export const registerUser = async (req, res) => {
  console.log("🔥 Register API hit");
  try {
    const { name, email, password } = req.body;
    console.log("📥 Request body:", req.body);
   
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

   
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    console.log("📩 Calling sendWelcomeEmail...");
    await sendWelcomeEmail(user.email, user.name);
    console.log("✅ sendWelcomeEmail finished");
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
