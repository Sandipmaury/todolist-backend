import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import { UserModel } from "../models/user.model.js";
import moment from "moment";
dotenv.config();

export const getUser = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await UserModel.findById(userId);
    return res.status(200).json({
      success: true,
      message: "Login successfull.",
      data: {
        userId: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status(408).json({ success: false, message: err.message });
  }
};

export const registerUser = async (req, res) => {
  const user = req.body;

  // checking user already present or not
  const checkEmail = await UserModel.findOne({ email: user?.email });
  if (checkEmail) {
    return res.status(403).json({
      success: false,
      message: "Email already present. Please login or create another account.",
    });
  }

  // creating hash password
  try {
    user.password = await bcrypt.hash(user?.password, 5);
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }

  // creating new user
  const newUser = new UserModel(user);
  try {
    await newUser.save();
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }

  // creating token
  let token;
  try {
    token = jsonwebtoken.sign(
      { userId: newUser._id, email: user?.email },
      process.env.SECRET_KEY,
      {
        expiresIn: "2d",
      }
    );
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
  return res.status(200).json({
    success: true,
    message: "We have created your account.",
    data: {
      userId: newUser?._id,
      username: newUser?.username,
      email: newUser?.email,
    },
    token: token,
  });
};

export const loginUser = async (req, res) => {
  const user = req.body;

  // checking user is valid or not
  const checkUser = await UserModel.findOne({ email: user?.email });
  if (!checkUser) {
    return res.status(404).json({
      success: false,
      message: "Invalid email or password. If don't have account create first.",
    });
  }

  //checking password
  const isMatched = await bcrypt.compare(user?.password, checkUser?.password);
  if (!isMatched) {
    return res.status(404).json({
      success: false,
      message: "Invalid email or password. If don't have account create first.",
    });
  }

  // update login time
  try {
    await UserModel.findByIdAndUpdate(
      checkUser?._id,
      { loginAt: moment().format("MMMM Do YYYY, h:mm a") },
      { new: true }
    );
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }

  // creating token
  let token;
  try {
    token = jsonwebtoken.sign(
      { userId: checkUser._id, email: user?.email },
      process.env.SECRET_KEY,
      {
        expiresIn: "10h",
      }
    );
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
  return res.status(200).json({
    success: true,
    message: "Login successfull.",
    data: {
      userId: checkUser?._id,
      username: checkUser?.username,
      email: checkUser?.email,
    },
    token: token,
  });
};

export const searchTeam = async (req, res) => {
  const { q } = req.query;

  try {
    let user = await UserModel.find({ username: q }).limit(5);

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    return res.status(408).json({ success: false, message: err.message });
  }
};
