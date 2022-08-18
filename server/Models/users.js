import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    address: {
      type: String,
    },
    number: {
      type: Number,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    adharnum: {
      type: Number,
    },
    Sallaryaspect: {
      type: String,
    },
    employment: {
      type: String,
      default: "employed",
      enum: ["employed", "unemployed"],
    },
    proffession: {
      type: [String],
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
