import moment from "moment";
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, require: true },
  discription: { type: String, require: true },
  status: { type: String, require: true },
  userId: { type: String, require: true },
  projectId: { type: String, require: true },
  createdAt: {
    type: String,
    require: true,
    default: moment().format("MMMM Do YYYY, h:mm a"),
  },
  updatedAt: {
    type: String,
    require: true,
    default: moment().format("MMMM Do YYYY, h:mm a"),
  },
});

export const TaskModel = mongoose.model("tasks", taskSchema);
