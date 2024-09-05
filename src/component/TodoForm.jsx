import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    name: "",
    description: "",
    status: "Not Completed",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.name && todo.description) {
      addTodo(todo);
      setTodo({ name: "", description: "", status: "Not Completed" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-3">
      <div className="row">
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Todo Name"
            value={todo.name}
            onChange={(e) => setTodo({ ...todo, name: e.target.value })}
            required
          />
        </div>
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Todo Description"
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
            required
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-success w-100">
            Add Todo
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
