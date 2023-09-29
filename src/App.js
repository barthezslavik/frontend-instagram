import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import UserLogin from './UserLogin';
import UserProfile from './UserProfile';
import ExportButton from './ExportButton';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
    <Router>
      <div>
        <h1>Welcome to Frontend-Instagram</h1>
        <ExportButton />
        {loggedInUser ? (
          <div>
            <p>Welcome, {loggedInUser}!</p>
            <Link to="/profile">Your Profile</Link>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}

        <Routes>
          <Route path="/login" element={<UserLogin onLogin={handleLogin} />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/" element={<p>Home Page (You can add a feed or other content here)</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;