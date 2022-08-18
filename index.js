import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
// import session from "express-session";
import cors from "cors";

// import All Routes
import authRoutes from "./server/Routes/auth_routes.js";
import userRoutes from "./server/Routes/user_routes.js";
import companyRoutes from "./server/Routes/company_routes.js";

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.DB)
    .then(() => {
      console.log("Database Connected successfully");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cors());
app.use(cookieParser());
// app.use(
//   session({
//     name: "userdata",
//     secret: process.env.SECRET,
//     cookie: { maxAge: 200000 },
//     resave: true,
//     saveUninitialized: true,
//   })
// );
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/company", companyRoutes);

app.listen(process.env.LOCAL_HOST_PORT, () => {
  connect();
  console.log(
    `server is running on http://localhost:${process.env.LOCAL_HOST_PORT}`
  );
});
