import React, { Component } from "react";
import "./HomePage.css";
import Project1 from "../Project1/Project1.js"; // Import the Project1 component

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        { id: 1, title: "Project 1", thumbnail: "https://picsum.photos/1000/1500.jpg?random=1" },
        { id: 2, title: "Project 2", thumbnail: "https://picsum.photos/1000/1500.jpg?random=2" },
        { id: 3, title: "Project 3", thumbnail: "https://picsum.photos/1000/1500.jpg?random=3" },
      ],
      showProject1: false, // Add a state variable to control rendering of Project1 page
    };
  }

  componentDidMount() {
    this.fetchThumbnails();
  }

  fetchThumbnails = async () => {
    const { projects } = this.state;

    try {
      for (const project of projects) {
        const response = await fetch("YOUR_API_ENDPOINT");
        const data = await response.json();
        const thumbnail = data.thumbnail;
        project.thumbnail = thumbnail;
      }

      this.setState({ projects });
    } catch (error) {
      console.error("Error fetching thumbnails:", error);
    }
  };

  handleLogout = () => {
    this.props.onLogout();
  };

  handleNavigateToProject = (projectId) => {
    if (projectId === 1) {
      // Show the Project1 page
      this.setState({ showProject1: true });
    } else {
      // Handle navigation to other project pages if needed
    }
  };

  handleGoBack = () => {
    // Go back to the homepage
    this.setState({ showProject1: false });
  };

  render() {
    const { projects, showProject1 } = this.state;

    if (showProject1) {
      return <Project1 onGoBack={this.handleGoBack} />; // Render the Project1 component when showProject1 is true
    }

    return (
      <div className="homepage-container">
        <div className="title-bar">
          <div className="hamburger-menu">
            <button>Account</button>
            <button>Settings</button>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        </div>
        <h1 className="homepage-heading">Team Up</h1>
        <div className="project-blocks">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-block"
              onClick={() => this.handleNavigateToProject(project.id)}
            >
              <img className="project-thumbnail" src={project.thumbnail} alt="Project Thumbnail" />
              <div className="project-title">{project.title}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
