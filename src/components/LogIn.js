import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

/**
 * LogIn Component
 * 
 * @param {Object} props - The props passed to the component.
 * @param {function} props.onSignIn - A function to handle successful sign-in.
 * @returns {JSX.Element} - The rendered Login component.
 */
const LogIn = ({ onSignIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Handles the Sign-in
   */
  const handleSignIn = () => {
    if (username && password) {
      const userData = { username, password };
      loginUser(userData);
      setUsername("");
      setPassword("");

    }
  };

  /**
   * POST request
   * 
   * @param {Object} userData - Credentials.
   */
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

  /**
   * Toastify success message
   * 
   * @param {string} message - The message
   */
  const showSuccessMessage = (message) => {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      onClose: redirectToHomePage,
    });
  };

  /**
   * Toastify error message
   * 
   * @param {string} message - The message
   */
  const showErrorMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  /**
   * Redirects to homepage
   */
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
