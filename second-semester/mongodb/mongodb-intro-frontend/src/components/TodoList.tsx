import Todo from "../models/todo";


function TodoList(props) {
  interface Props {
    todos: Todo[]
  }
  const TodoList = ({todos}: Props)
  return <div>
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>{todo.list}</li>
      ))}
    </ul>
  </div>;
}

export default TodoList;
