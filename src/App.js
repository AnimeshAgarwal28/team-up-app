import React, { useState } from "react";
import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/Home/HomePage";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false); // Update the loggedIn state to false
  };

  return (
    <div className="app">
      {loggedIn ? (
        <HomePage onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
