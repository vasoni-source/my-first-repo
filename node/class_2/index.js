import express from "express";
import dbconnection from "./db.js";
import dotenv from "dotenv";
import speakeasy from "speakeasy";
import nodemailer from "nodemailer";
import cors from "cors"
// import userRoutes from './routes/user.js'
import {
  userRoutes,
  productRoutes,
  orderRoutes,
  cartRoutes,
  adminRoutes,
  wishlistRoutes,
  // otpRouter,
} from "./routes/index.js";
const app = express();
app.use(cors({
  origin:"*"
}));
dotenv.config();
app.use(express.json());

app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/order", orderRoutes);
app.use("/cart", cartRoutes);
app.use("/wishlist",wishlistRoutes);
app.use("/admin",adminRoutes);
// create a db connection here
// and impliment the connect DB funnction

dbconnection();
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
