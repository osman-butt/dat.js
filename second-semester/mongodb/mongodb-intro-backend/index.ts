import "dotenv/config";
import express from "express";
import todosRouter from "./routers/todosRouter";
import dbConnect from "./startup/dbConnect";

dbConnect();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/todos", todosRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
