import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database!"));

const app = express();
app.use(express.json());
const PORT = 8800;

app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Server started on https://localhost:8800");
});
