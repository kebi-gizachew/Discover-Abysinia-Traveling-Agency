import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/loginSignup.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add login logic
    console.log({ email, password });
  };

  return (
    <div className="auth-container discover-container">
      <div className="discover-hero">
        <h1 className="discover-title">Discover Ethiopia</h1>
        <p className="discover-subtitle">
          Embark on an unforgettable journey through ancient history, stunning landscapes, and vibrant cultures.
        </p>
        
        <div className="features-list">
          <div className="feature-item">
            <div className="feature-checkbox checked"></div>
            <span>Ancient Historical Sites</span>
          </div>
          <div className="feature-item">
            <div className="feature-checkbox checked"></div>
            <span>Breathtaking Landscapes</span>
          </div>
          <div className="feature-item ">
            <div className="feature-checkbox checked"></div>
            <span>Rich Cultural Experiences</span>
          </div>
        </div>
      </div>

        <div className="auth-card">
          <p className="returnToHome"><a href="/Home">Back to Home</a></p>
          <h2>Welcome Back</h2>
          <p className="auth-subtitle">Sign in to access your travel bookings</p>
          
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="beinmetabd20@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="auth-btn">Sign In</button>
          </form>
          
          <p className="auth-switch">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
        
      </div>

  );
};

export default Login;