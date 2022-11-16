import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    about: { type: String, require: true },
    userId: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

export const ProjectModel = mongoose.model("projects", projectSchema);
