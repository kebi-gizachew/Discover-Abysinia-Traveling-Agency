import { useState } from "react";
import '../styles/loginSignup.css'
import 'remixicon/fonts/remixicon.css';

const Signup = () => {
  const [email, setEmail] = useState("beinmetabd20@gmail.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add signup logic
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
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
          <p className="returnToHome"><a href="/Home"><i className="ri-arrow-left-line"></i>
Back to Home</a></p>
          <h2>Create Account</h2>
          <p className="auth-subtitle">Join us to start your Ethiopian adventure</p>
          
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="your@gmail.com"
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
            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          
            <button type="submit" className="auth-btn">Create Account</button>
          </form>
          
          <p className="auth-switch">
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </div>
      </div>

  );
};

export default Signup;