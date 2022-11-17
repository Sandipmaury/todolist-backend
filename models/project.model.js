import moment from "moment";
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, require: true },
  about: { type: String, require: true },
  userId: { type: String, require: true },
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

export const ProjectModel = mongoose.model("projects", projectSchema);
