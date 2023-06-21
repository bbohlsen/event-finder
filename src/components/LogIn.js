import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const LogIn = ({ onSignIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (username && password) {
      const userData = { username, password };
      loginUser(userData);
    }
  };

  const loginUser = (userData) => {
    axios
      .post('/login', userData)
      .then((response) => {
        onSignIn(response.data.success);
        showSuccessMessage('Sign in successful!');
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      })
      .catch((error) => {
        showErrorMessage('Invalid username or password');
        console.error(error);
      });
  };

  const showSuccessMessage = (message) => {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      onClose: redirectToHomePage,
    });
  };

  const showErrorMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const redirectToHomePage = () => {
    setTimeout(() => {
      window.location.href = '/';
    }, 3000);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Login</button>
      <ToastContainer />
      <Link to="/UserRegistration">Don't have an account? Register</Link>
    </div>
  );
};

export default LogIn;
