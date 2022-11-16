import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("users", userSchema);
