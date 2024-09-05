import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    name: "",
    description: "",
    status: "Not Completed",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.name.trim() && todo.description.trim()) {
      addTodo(todo);
      setTodo({ name: "", description: "", status: "Not Completed" }); // Clear form after adding
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control mb-2"
          placeholder="Todo Name"
          value={todo.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          className="form-control mb-2"
          placeholder="Todo Description"
          value={todo.description}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-success w-100">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
