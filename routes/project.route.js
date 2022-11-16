import { Router } from "express";
import {
  createProject,
  deleteProject,
  getProject,
  getSingleProject,
  updateProject,
} from "../controllers/project.controller.js";

import { projectValidation } from "../middleware/projectValidation.middleware.js";

export const projectRouter = Router();

projectRouter.get("/", getProject);
projectRouter.get("/:id", getSingleProject);
projectRouter.post("/", projectValidation, createProject);
projectRouter.patch("/:id", updateProject);
projectRouter.delete("/:id", deleteProject);
