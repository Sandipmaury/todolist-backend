import { Router } from "express";
import { getUserProfile } from "../controllers/profile.controller.js";

export const userProfileRouter = Router();

userProfileRouter.get("/:id", getUserProfile);
