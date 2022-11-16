export const taskValidation = (req, res, next) => {
  const { title, discription, userId, projectId } = req.body;
  if (!title || !discription || !userId || !projectId) {
    return res.status(404).json({ success: false, message: "Invalid Input" });
  } else next();
};
