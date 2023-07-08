import React, { useState } from "react";

const TeamManagementPage = ({ onLogout }) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false },
  ]);

  const handleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleLogout = () => {
    // Call the onLogout function passed from the App component
    onLogout();
  };

  return (
    <div>
      <h1>Team Management</h1>
      <h2>Tasks</h2>
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleTaskCompletion(task.id)}
          />
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.title}</span>
        </div>
      ))}
      <button onClick={handleLogout}>Logout</button> {/* Add logout button */}
    </div>
  );
};

export default TeamManagementPage;
