import jwt from "jsonwebtoken";
import User from "../Models/users.js";

export const AuthenticatedUser = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json({
      message: "You are not authorized",
      success: false,
    });
  }
  jwt.verify(token, process.env.JWT, (error, user) => {
    if (error) {
      return res.status(401).json({
        message: "Token is not valid",
        success: false,
      });
    }
    req.user = user;
    next();
  });
};

export const verifyRole = (...roles) => {
  return (req, res, next) => {
    const user = jwt.verify(req.cookies.access_token, process.env.JWT);
    if (!roles.includes(user.role)) {
      return res.status(401).json({
        message: `Role: ${user.role} is not allowed to access this resource`,
      });
    }
    next();
  };
};
