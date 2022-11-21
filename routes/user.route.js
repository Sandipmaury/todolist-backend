import { Router } from "express";
import {
  getUser,
  loginUser,
  registerUser,
  searchTeam,
} from "../controllers/user.controller.js";
import { gaurdMiddleware } from "../middleware/gaurd.middleware.js";
import { userInputValidation } from "../middleware/userValidation.middleware.js";

export const userRouter = Router();

userRouter.post("/login", loginUser);
userRouter.post("/register", userInputValidation, registerUser);
userRouter.get("/", gaurdMiddleware, getUser);
userRouter.get("/:id", gaurdMiddleware, searchTeam);
