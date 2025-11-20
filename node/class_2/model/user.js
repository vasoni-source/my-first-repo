import mongoose from "mongoose";
const shippingAddressSchema = new mongoose.Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
});
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    // required: true,
    match: [/^[0-9]{10}$/, "Phone number must be 10 digits"],
  },
  shippingAddresses: [shippingAddressSchema],
  role: {
    type: String,
    enum: ["user", "seller", "admin"],
    default: "user",
    required: true,
  },
});
export default userSchema;
