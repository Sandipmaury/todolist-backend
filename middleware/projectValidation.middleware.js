export const projectValidation = (req, res, next) => {
  const { title, about, userId } = req.body;
  if (!title || !about || !userId) {
    return res.status(404).json({ success: false, message: "Invalid Input" });
  } else next();
};
