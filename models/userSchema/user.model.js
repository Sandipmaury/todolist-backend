import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  profession: { type: String, require: false },
  about: { type: String, require: false },
});

export const UserModel = mongoose.model("users", userSchema);
