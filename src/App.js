import React, { useState } from "react";
import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/Home/HomePage";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleNavigateToProject = (projectId) => {
    console.log("Navigating to Project", projectId);
  };

  return (
    <div className="app">
      {loggedIn ? (
        <HomePage onLogout={handleLogout} onNavigateToProject={handleNavigateToProject} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
