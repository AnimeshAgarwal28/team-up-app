import React from "react";
import "./HomePage.css";

const HomePage = ({ onLogout, onNavigateToProject }) => {
  const handleLogout = () => {
    // Call the onLogout function passed from the App component
    onLogout();
  };

  const handleNavigateToProject = (projectId) => {
    // Call the onNavigateToProject function passed from the App component
    onNavigateToProject(projectId);
  };

  // Hardcoded projects array
  const projects = [
    { id: 1, title: "Project 1" },
    { id: 2, title: "Project 2" },
    { id: 3, title: "Project 3" },
  ];

  return (
    <div>
      <div className="title-bar">
        <div className="hamburger-menu">
          <button>Account</button>
          <button>Settings</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <h1>Team Up</h1>
      <div className="project-blocks">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-block"
            onClick={() => handleNavigateToProject(project.id)}
          >
            {project.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
