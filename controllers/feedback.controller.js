import { FeedbackModel } from "../models/feedback.model.js";

export const postFeedback = async (req, res) => {
  let feedback = req.body;
  const newFeedback = new FeedbackModel(feedback);
  try {
    task = await newFeedback.save();
    return res.status(200).json({
      success: true,
      message: "Thank you for your feedback.",
      data: newFeedback,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const getFeedback = async (req, res) => {
  try {
    const feedbacks = await FeedbackModel.find();
    return res.status(200).json({
      success: true,
      message: "All feedbacks.",
      data: feedbacks,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteFeedback = async (req, res) => {
  const { id } = req.params;
  try {
    const feedback = await FeedbackModel.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Feedback deleted.",
      data: feedback,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
