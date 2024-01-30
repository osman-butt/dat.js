import { Router } from "express";
import Todo from "../models/todo";

const todosRouter = Router();

todosRouter.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (error) {
    res.json({ message: error });
  }
});

todosRouter.post("/", async (req, res) => {
  const todo = new Todo({ title: req.body.title });
  try {
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (error) {
    res.json({ message: error });
  }
});

todosRouter.delete("/:todoId", async (req, res) => {
  try {
    const removedTodo = await Todo.deleteOne({ _id: req.params.todoId });
    res.json(removedTodo);
  } catch (error) {
    res.json({ message: error });
  }
});

export default todosRouter;
