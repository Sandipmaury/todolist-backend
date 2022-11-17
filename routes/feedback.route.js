import { Router } from "express";
import {
  deleteFeedback,
  getFeedback,
  postFeedback,
} from "../controllers/feedback.controller.js";
import { gaurdMiddleware } from "../middleware/gaurd.middleware.js";

export const feedbackRouter = Router();

feedbackRouter.post("/", postFeedback);
feedbackRouter.get("/", gaurdMiddleware, getFeedback);
feedbackRouter.delete("/:id", gaurdMiddleware, deleteFeedback);
