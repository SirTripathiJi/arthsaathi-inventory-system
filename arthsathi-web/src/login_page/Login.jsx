import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import './Login.css';

function Login() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formData, setFormData] = useState({
    fullName: '',
    shopName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAuth = (e) => {
    e.preventDefault();

    if (!formData.email.includes('@') || formData.password === '') {
      alert('Email must contain "@" and password cannot be empty.');
      return;
    }

    if (!isLoginMode) {
      if (formData.fullName === '' || formData.shopName === '') {
        alert('Full Name and Store Name cannot be empty.');
        return;
      }
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (isLoginMode) {
      const user = users.find((u) => {
        return u.email === formData.email && u.password === formData.password;
      });

      if (user) {
        localStorage.setItem('authUser', JSON.stringify(user));
        navigate('/dashboard');
      } else {
        alert('Invalid credentials!');
      }
    } else {
      const newUser = {
        username: formData.fullName,
        shopName: formData.shopName,
        email: formData.email,
        password: formData.password,
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('authUser', JSON.stringify(newUser));
      navigate('/dashboard');
    }
  };

  return (
    <AuthLayout>
      <div className="auth-card">
        <div className="auth-header">
          <h2>{isLoginMode ? 'Welcome back' : 'Create account'}</h2>
        </div>

        <div className="auth-tabs">
          <button
            type="button"
            className={`tab-btn ${isLoginMode ? 'active' : ''}`}
            onClick={() => setIsLoginMode(true)}
          >
            Login
          </button>

          <button
            type="button"
            className={`tab-btn ${!isLoginMode ? 'active' : ''}`}
            onClick={() => setIsLoginMode(false)}
          >
            Sign Up
          </button>
        </div>

        <form className="auth-form" onSubmit={handleAuth}>
          {!isLoginMode && (
            <>
              <div className="input-group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInput}
                />
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="shopName"
                  placeholder="Store Name"
                  value={formData.shopName}
                  onChange={handleInput}
                />
              </div>
            </>
          )}

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInput}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInput}
            />
          </div>

          <button type="submit" className="auth-btn">
            {isLoginMode ? 'Login' : 'Create Account'}
          </button>
        </form>

        <div className="auth-footer">
          {isLoginMode ? (
            <p>
              Don't have an account?{' '}
              <span onClick={() => setIsLoginMode(false)}>Sign up</span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span onClick={() => setIsLoginMode(true)}>Login</span>
            </p>
          )}
        </div>
      </div>
    </AuthLayout>
  );
}

export default Login;