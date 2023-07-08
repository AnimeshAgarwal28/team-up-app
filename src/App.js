import React, { useState } from 'react';
import LoginPage from './pages/Login/LoginPage';
import TaskPage from './pages/Taks/TaskPage';

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
      {loggedIn ? <TaskPage onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
};

export default App;
