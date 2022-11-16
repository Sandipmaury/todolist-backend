import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    discription: { type: String, require: true },
    status: { type: String, require: true },
    userId: { type: String, require: true },
    projectId: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

export const TaskModel = mongoose.model("tasks", taskSchema);
