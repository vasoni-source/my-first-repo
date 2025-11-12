import mongoose from "mongoose";

const resetSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  reset: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 120, // ⏱ OTP expires after 120 seconds (2 minutes)
  },
});

export default mongoose.model("ResetToken", resetSchema);