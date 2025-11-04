import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
   const authHeader = await req.header("Authorization");
    const token = authHeader.split(" ")[1];
  console.log(" verifyToken middleware triggered")
  try {
    if (!token) {
      return res.status(401).json({ error: "Access denied" });
    }
    console.log("Authorization header:", token);
    const decoded = jwt.verify(token, "vs");
    console.log("Token decoded successfully:", decoded);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};
export default verifyToken;

