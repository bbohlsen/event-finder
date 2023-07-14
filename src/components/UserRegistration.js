import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const UserRegistration = ({ onRegister }) => {
    const [userType, setUserType] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [adminKey, setAdminKey] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        if (storedUsername && storedPassword) {
          setUsername(storedUsername);
          setPassword(storedPassword);
        }
      }, []);
  
    const handleRegister = () => {
      if (userType === 'guest') {
        if (username && password) {
          onRegister(userType, { username, password });
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
          showSuccessMessage();
        }
      } else if (userType === 'manager') {
        if (username && password && adminKey) {
          onRegister(userType, { username, password, adminKey });
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
          showSuccessMessage();
        }
      }
    };

  const showSuccessMessage = () => {
    toast.success('Thank you for registering!', {
      position: toast.POSITION.BOTTOM_CENTER,
      onClose: redirectToHomePage,
    });
  };

  const redirectToHomePage = () => {
    setTimeout(() => {
      window.location.href = '/';
    }, 6000);
  };

  return (
    <div>
      <h2>User Registration</h2>
      <div>
        <label>
          <input
            type="radio"
            name="userType"
            value="guest"
            checked={userType === 'guest'}
            onChange={() => setUserType('guest')}
          />
          Guest
        </label>
      </div>
      {userType === 'guest' && (
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
      )}
      <div>
        <label>
          <input
            type="radio"
            name="userType"
            value="manager"
            checked={userType === 'manager'}
            onChange={() => setUserType('manager')}
          />
          Manager
        </label>
      </div>
      {userType === 'manager' && (
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            Admin Key:
            <input
              type="password"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
            />
            <Link to="/Request.js">Request Key</Link>
          </label>
        </div>
      )}
      <button onClick={handleRegister}>Register</button>
      <ToastContainer />
      
      <Link to="/LogIn">Already have an account? Log in</Link>
    
    </div>
  );
};

export default UserRegistration;