import { useState, useEffect } from "react";
import "./App.css";
const BASE_URL = "http://localhost:5000";



function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZGQzNmRhNjc4YTA2YmE5MzQ1MzU0YyIsImlhdCI6MTc3NjI0OTQ1NSwiZXhwIjoxNzc2MzM1ODU1fQ.j42GVeta9RF2VZRwy0SAqJxMtQ2WNMj9cOc38rAFdOc";

  // GET tasks
  useEffect(() => {
    fetch(`${BASE_URL}/api/tasks`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => console.log(err));
  }, [token]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  // CREATE task
  const addTask = () => {
    if (!title.trim()) {
      alert("Task cannot be empty");
      return;
    }

    fetch(`${BASE_URL}/api/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((newTask) => {
        setTasks((prev) => [...prev, newTask]);
        setTitle("");
      });
  };

  //delete task
  const deleteTask = (id) => {
    fetch(`${BASE_URL}/api/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then(() => {
        setTasks((prev) => prev.filter((task) => task._id !== id));
      });
  };

  const toggleTask = (task) => {
    fetch(`${BASE_URL}/api/tasks/${task._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: task.title,
        completed: !task.completed,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((updatedTask) => {
        setTasks((prev) =>
          prev.map((t) => (t._id === updatedTask._id ? updatedTask : t))
        );
      });
  };

  return (
    <div className="container">
      <h1>ToDo App</h1>

      <div className="input-section">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>

        <button
          className={filter === "pending" ? "active" : ""}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
      </div>

      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task._id} className="task-item">
            <div className="left">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task)}
              />

              <span className={task.completed ? "completed" : ""}>
                {task.title}
              </span>
            </div>

            <button
              className="delete-btn"
              onClick={() => deleteTask(task._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;