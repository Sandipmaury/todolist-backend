import { Router } from "express";
import {
  getUser,
  loginUser,
  registerUser,
} from "../controllers/user.controller.js";
import { gaurdMiddleware } from "../middleware/gaurd.middleware.js";

export const userRouter = Router();

userRouter.post("/login", loginUser);
userRouter.post("/register", registerUser);
userRouter.get("/", gaurdMiddleware, getUser);
