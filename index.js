import express from "express";
import cors from "cors";
import { connection } from "./config/db.js";
import dotenv from "dotenv";
import { gaurdMiddleware } from "./middleware/gaurd.middleware.js";
import { userRouter } from "./routes/user.route.js";
import { projectRouter } from "./routes/project.route.js";
import { taskRouter } from "./routes/task.route.js";
import { feedbackRouter } from "./routes/feedback.route.js";
dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/feedbacks", feedbackRouter);

// gaurd middleware for checking is user validated or not
app.use("/projects", gaurdMiddleware, projectRouter);
app.use("/tasks", gaurdMiddleware, taskRouter);
// server is runnig
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("db connection successfull");
  } catch (err) {
    console.log("db connection failed", err);
  } finally {
    console.log(`port is running on ${PORT}`);
  }
});
