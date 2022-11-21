import { ProjectModel } from "../models/project.model.js";
import { TaskModel } from "../models/task.model.js";
import { UserModel } from "../models/user.model.js";

export const getUserProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findById(id);
    const projects = await ProjectModel.find({ userId: id });
    const tasks = await TaskModel.find({ userId: id });
    return res
      .status(200)
      .json({ success: true, data: { user, projects, tasks } });
  } catch (err) {
    return res.status(404).json({ success: false, error: err.message });
  }
};
