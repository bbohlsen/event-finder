import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import ManagerDashboard from './components/ManagerDashboard';
import LogIn from './components/LogIn';
import UserRegistration from './components/UserRegistration';
import { EventContext, EventProvider } from './components/EventContext';

function App() {
  const [events, setEvents] = useState([]);
  const [userType, setUserType] = useState('');
  const [loggedInUser, setLoggedInUser] = useState('');

  const handleAddEvent = (event) => {
    setEvents([...events, event]);
  };

  const handleDeleteEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };

  const handleRegister = (user) => {
    // Perform user registration logic here
    console.log('User registered:', user);
  };

  const handleSignIn = (username) => {
    setLoggedInUser(username);
  };

  return (
    <EventProvider>
    <Router>
      {/* Navigation */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ManagerDashboard">Manager Dashboard</Link>
          </li>
          <li>
            <Link to="/UserRegistration">Register</Link>
          </li>
          <li>
            <Link to="/LogIn">Login</Link>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage events={events} />} />
        <Route
          path="/ManagerDashboard"
          element={<ManagerDashboard events={events} onDeleteEvent={handleDeleteEvent} onAddEvent={handleAddEvent} />}
        />
        <Route path="/UserRegistration" element={<UserRegistration onRegister={handleRegister} />} />
        <Route path="/LogIn" element={<LogIn onSignIn={handleSignIn} />} />
      </Routes>

    </Router>
    </EventProvider>
  );
}

export default App;
