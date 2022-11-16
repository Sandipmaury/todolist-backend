import { ProjectModel } from "../models/project.model.js";

export const createProject = async (req, res) => {
  let project = req.body;
  const newProject = new ProjectModel(project);
  try {
    project = await newProject.save();
    return res.status(200).json({
      success: true,
      message: "You have create new project.",
      data: project,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
export const getProject = async (req, res) => {
  const { userId } = req.body;
  try {
    const projects = await ProjectModel.find({ userId: userId });
    return res.status(200).json({
      success: true,
      message: "These are your all projects.",
      data: projects,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
export const getSingleProject = async (req, res) => {
  const { id } = req.params;

  try {
    const projects = await ProjectModel.findById(id);
    if (!projects) {
      return res
        .status(404)
        .json({ success: false, message: "Project Not Found" });
    }
    return res.status(200).json({
      success: true,
      message: "This is your project.",
      data: projects,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
export const updateProject = async (req, res) => {
  const { id } = req.params;
  const project = req.body;
  try {
    const updateProject = await ProjectModel.findByIdAndUpdate(
      id,
      { ...project },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Your project updated successfully.",
      data: updateProject,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
export const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProject = await ProjectModel.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Your project deleted successfully.",
      data: deletedProject,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
