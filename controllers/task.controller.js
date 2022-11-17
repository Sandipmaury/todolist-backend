import moment from "moment";
import { TaskModel } from "../models/task.model.js";

export const createTask = async (req, res) => {
  let task = req.body;
  const newTask = new TaskModel(task);
  try {
    task = await newTask.save();
    return res.status(200).json({
      success: true,
      message: "You have created new task.",
      data: newTask,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
export const getTask = async (req, res) => {
  const { projectId } = req.params;

  try {
    const tasks = await TaskModel.find({ projectId: projectId });
    return res.status(200).json({
      success: true,
      message: "These are your all task.",
      data: tasks,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const getSingleTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await TaskModel.findById(id);
    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "Task Not Found" });
    }
    return res.status(200).json({
      success: true,
      message: "This is your task.",
      data: task,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const task = req.body;

  task.updatedAt = moment().format("MMMM Do YYYY, h:mm a");
  try {
    const updateTask = await TaskModel.findByIdAndUpdate(
      id,
      { ...task },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Your task updated successfully.",
      data: updateTask,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await TaskModel.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Your task deleted successfully.",
      data: deletedTask,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
