import mongoose from "mongoose";
const FormSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    companyname: {
      type: String,
      required: true,
    },
    companyaddress: {
      type: String,
      required: true,
    },
    permonthSallary: {
      type: Number,
    },
    startingDate: {
      type: String,
    },
    endingDate: {
      type: String,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Form", FormSchema);
