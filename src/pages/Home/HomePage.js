import React, { useEffect, useState } from "react";
import "./HomePage.css";

const HomePage = ({ onLogout, onNavigateToProject }) => {
  const handleLogout = () => {
    onLogout();
  };

  const handleNavigateToProject = (projectId) => {
    onNavigateToProject(projectId);
  };

  const projects = [
    { id: 1, title: "Project 1", thumbnail: "https://picsum.photos/1000/1500.jpg?random=1" },
    { id: 2, title: "Project 2", thumbnail: "https://picsum.photos/1000/1500.jpg?random=2" },
    { id: 3, title: "Project 3", thumbnail: "https://picsum.photos/1000/1500.jpg?random=3" },
  ];

  useEffect(() => {
    const fetchThumbnails = async () => {
      for (const project of projects) {
        try {
          const response = await fetch("YOUR_API_ENDPOINT");
          const data = await response.json();
          const thumbnail = data.thumbnail;
          project.thumbnail = thumbnail;
        } catch (error) {
          console.error(`Error fetching thumbnail for project ${project.id}:`, error);
        }
      }
    };

    fetchThumbnails();
  }, []);

  return (
    <div className="homepage-container">
      <div className="title-bar">
        <div className="hamburger-menu">
          <button>Account</button>
          <button>Settings</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <h1 className="homepage-heading">Team Up</h1>
      <div className="project-blocks">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-block"
            onClick={() => handleNavigateToProject(project.id)}
          >
            <img className="project-thumbnail" src={project.thumbnail} alt="Project Thumbnail" />
            <div className="project-title">{project.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
