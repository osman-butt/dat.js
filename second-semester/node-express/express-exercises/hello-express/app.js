import express from "express";
import { todos } from "./data.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get("/users", (req, res) => {
  res.send("GET users");
});

app.post("/users", (req, res) => {
  res.send("POST users");
});

app.put("/users", (req, res) => {
  res.send("PUT users");
});

app.delete("/users", (req, res) => {
  res.send("DELETE users");
});

app.patch("/users", (req, res) => {
  res.send("PATCH users");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  const specificTodo = todos.find(todo => todo.id === Number(id));
  console.log(id);
  console.log(specificTodo);
  if (specificTodo) {
    res.json(specificTodo);
  } else {
    res.status(404).json({ Status: 404, message: "Resource not found" });
  }
});

app.post("/todos", (req, res) => {
  const newTodo = req.body;
  console.log(newTodo);
  newTodo.id = new Date().getTime();
  todos.push(newTodo);
  res.json(todos);
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const todoReq = req.body;
  console.log(id);
  console.log(todoReq);
  const todoUpdated = todos.find(todo => todo.id === Number(id));
  todoUpdated.task = todoReq.task;
  todoUpdated.completed = todoReq.completed;
  res.json(todos);
});

app.listen(port, () => {
  console.log(`Server is running on "http://localhost:${port}`);
});
