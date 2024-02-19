import express from "express";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 5000;
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/user.js";

const app = express();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Get routes is ready");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
