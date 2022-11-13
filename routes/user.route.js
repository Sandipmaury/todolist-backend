import { Router } from "express";
import {
  getUser,
  loginUser,
  registerUser,
} from "../controllers/user.controller.js";

export const userRouter = Router();

userRouter.get("/", getUser);
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
