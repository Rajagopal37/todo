import { useState } from "react";

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  const [filter, setFilter] = useState("All");

  const handleStatusChange = (index, newStatus) => {
    updateTodo(index, newStatus);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Completed") return todo.status === "Completed";
    if (filter === "Not Completed") return todo.status === "Not Completed";
    return true; // 'All'
  });

  return (
    <div>
      <h3 className="my-3">My Todos</h3>
      <div className="mb-3">
        <label>Status Filter: </label>
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="ms-2"
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>

      <div className="row">
        {filteredTodos.map((todo, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{todo.name}</h5>
                <p className="card-text">{todo.description}</p>
                <p className="card-text">
                  Status:{" "}
                  <span
                    className={`badge ${
                      todo.status === "Completed" ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {todo.status}
                  </span>
                </p>
                <select
                  className="form-select mb-2"
                  onChange={(e) => handleStatusChange(index, e.target.value)}
                  value={todo.status}
                >
                  <option value="Completed">Completed</option>
                  <option value="Not Completed">Not Completed</option>
                </select>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleStatusChange(index, "edit")}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
