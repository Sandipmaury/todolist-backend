export const userInputValidation = (req, res, next) => {
  const { email, password, username } = req.body;
  if (!email || !password || !username) {
    return res.status(404).json({ success: false, message: "Invalid Input" });
  }
  if (!email.includes("@")) {
    return res.status(404).json({
      success: false,
      message: "Invalid email.",
    });
  }
  if (password.length < 6) {
    return res.status(404).json({
      success: false,
      message: "Password must have minimum six characters.",
    });
  }

  next();
};
