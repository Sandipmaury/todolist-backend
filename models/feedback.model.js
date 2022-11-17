import moment from "moment";
import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  name: { type: String, require: true },
  feedback: { type: String, require: true },
  password: { type: String, require: true },
  submitAt: {
    type: String,
    require: true,
    default: moment().format("MMMM Do YYYY, h:mm a"),
  },
});

export const FeedbackModel = mongoose.model("feedbacks", feedbackSchema);
