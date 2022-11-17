import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const gaurdMiddleware = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];

  if (!token || token === "undefined" || token === "null") {
    return res.status(404).json({ success: false, message: "please login" });
  }
  try {
    const user = jsonwebtoken.verify(token, process.env.SECRET_KEY);
    req.body.userId = user.userId;
    return next();
  } catch (err) {
    return res.status(404).json({ success: false, message: err.message });
  }
};
