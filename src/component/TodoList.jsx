import { useState } from "react";

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  const [editIndex, setEditIndex] = useState(null); // Track the current editing todo
  const [editedTodo, setEditedTodo] = useState({
    name: "",
    description: "",
    status: "Not Completed",
  }); // Track changes
  const [filter, setFilter] = useState("All"); // Track the status filter

  // Handle Edit Button Click
  const handleEditClick = (index, todo) => {
    setEditIndex(index);
    setEditedTodo({
      name: todo.name,
      description: todo.description,
      status: todo.status,
    });
  };

  // Handle Save Button Click
  const handleSaveClick = (index) => {
    updateTodo(index, editedTodo); // Update the todo with edited values
    setEditIndex(null); // Exit edit mode
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTodo({ ...editedTodo, [name]: value });
  };

  // Filter Todos Based on Status
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Completed") return todo.status === "Completed";
    if (filter === "Not Completed") return todo.status === "Not Completed";
    return true; // Return all todos for "All" filter
  });

  return (
    <div>
      <h3 className="my-3">My Todos</h3>

      {/* Status Filter */}
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

      {/* Displaying Todos */}
      <div className="row">
        {filteredTodos.map((todo, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-3">
              <div className="card-body">
                {/* Check if the current todo is being edited */}
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      name="name"
                      className="form-control mb-2"
                      value={editedTodo.name}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="description"
                      className="form-control mb-2"
                      value={editedTodo.description}
                      onChange={handleInputChange}
                    />
                    <select
                      name="status"
                      className="form-control mb-2"
                      value={editedTodo.status}
                      onChange={handleInputChange}
                    >
                      <option value="Completed">Completed</option>
                      <option value="Not Completed">Not Completed</option>
                    </select>
                  </>
                ) : (
                  <>
                    <h5 className="card-title">{todo.name}</h5>
                    <p className="card-text">{todo.description}</p>
                    <p className="card-text">
                      Status:{" "}
                      <span
                        className={`badge ${
                          todo.status === "Completed"
                            ? "bg-success"
                            : "bg-danger"
                        }`}
                      >
                        {todo.status}
                      </span>
                    </p>
                  </>
                )}

                {/* Edit / Save and Delete Buttons */}
                <div className="d-flex justify-content-between">
                  {editIndex === index ? (
                    <button
                      className="btn btn-success"
                      onClick={() => handleSaveClick(index)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEditClick(index, todo)}
                    >
                      Edit
                    </button>
                  )}
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
