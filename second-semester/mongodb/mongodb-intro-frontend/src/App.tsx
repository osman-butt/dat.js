import { useEffect, useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import Todo from "./models/todo";
import todoService from "./todoService";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const todos = await todoService.getAll();
    setTodos(todos);
  };

  return (
    <>
      <NewTodo />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
