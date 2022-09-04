import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

// import All Routes
import authRoutes from "./server/Routes/auth_routes.js";
import userRoutes from "./server/Routes/user_routes.js";
import companyRoutes from "./server/Routes/company_routes.js";
import contact from "./server/Routes/contact_routes.js";

const app = express();
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config();
}
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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/company", companyRoutes);
app.use("/api", contact);

app.use(express.static("client/build"));
import path from "path";
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT || 3001, () => {
  connect();
  console.log(
    `server is running on http://localhost:${process.env.PORT || 3001}`
  );
});
