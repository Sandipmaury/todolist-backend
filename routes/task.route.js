import { Router } from "express";
import {
  createTask,
  deleteTask,
  getSingleTask,
  getTask,
  updateTask,
} from "../controllers/task.controller.js";
import { taskValidation } from "../middleware/taskValidation.js";

export const taskRouter = Router();

taskRouter.get("/:projectId", getTask);
taskRouter.get("/:projectId/:id", getSingleTask);
taskRouter.post("/:projectId", taskValidation, createTask);
taskRouter.patch("/:projectId/:id", updateTask);
taskRouter.delete("/:projectId/:id", deleteTask);
