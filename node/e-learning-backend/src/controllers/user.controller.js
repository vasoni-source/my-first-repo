
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

export const updateProfile = async (req, res) => {
  const { name, email } = req.body;

  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (email && email !== user.email) {
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ message: "Email already in use" });
    }
  }

  user.name = name || user.name;
  user.email = email || user.email;

  await user.save();

  res.json({
    message: "Profile updated successfully",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
};
export const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(currentPassword, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Current password incorrect" });
  }

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(newPassword, salt);

  await user.save();

  res.json({ message: "Password changed successfully" });
};