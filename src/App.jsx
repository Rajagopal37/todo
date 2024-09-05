import { useState } from "react";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (index, status) => {
    const newTodos = [...todos];
    q;
    newTodos[index].status = status;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h2 className="my-4 text-center">Gopal Todo App</h2>
      <TodoForm addTodo={addTodo} />

      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
