import moment from "moment";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  registerAt: {
    type: String,
    require: true,
    default: moment().format("MMMM Do YYYY, h:mm a"),
  },
  loginAt: {
    type: String,
    require: true,
    default: moment().format("MMMM Do YYYY, h:mm a"),
  },
  role: { type: String, require: true, default: "user" },
});

export const UserModel = mongoose.model("users", userSchema);
