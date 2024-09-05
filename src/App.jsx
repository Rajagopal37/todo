import React, { useState } from "react";
import TodoList from "./component/TodoList";
import TodoForm from "./component/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Function to update an existing todo
  const updateTodo = (index, updatedTodo) => {
    const newTodos = [...todos];
    newTodos[index] = { ...newTodos[index], ...updatedTodo }; // Merge updated values into the todo
    setTodos(newTodos);
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h2 className="my-4 text-center">My Todo App</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
