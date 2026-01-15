import { useState } from "react";
import '../styles/loginSignup.css';
import 'remixicon/fonts/remixicon.css';
import { authService } from '../../services/authService';

const Signup = () => {
  const [email, setEmail] = useState("beinmetabd20@gmail.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    
    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }
    
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    
    setLoading(true);

    try {
      const result = await authService.signup(email, password);
      
      if (result.success) {
        console.log("Signup successful:", result);
        alert("Account created successfully! You are now logged in.");
        window.location.href = "/";
      } else {
        setError(result.message || "Signup failed");
      }
    } catch (err) {
      setError(err.message || "Signup failed. Please try again.");
      console.error("Signup error:", err);
    } finally {
      setLoading(false); 
    }
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
        <p className="returnToHome">
          <a href="/">
            <i className="ri-arrow-left-line"></i>Back to Home
          </a>
        </p>
        <h2>Create Account</h2>
        <p className="auth-subtitle">Join us to start your Ethiopian adventure</p>
      
        {error && (
          <div style={{
            backgroundColor: '#fee',
            border: '1px solid #fcc',
            color: '#c33',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '15px',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <i className="ri-error-warning-line"></i> {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="your@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password (min. 8 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
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
              disabled={loading}
            />
          </div>
          
          <button 
            type="submit" 
            className="auth-btn"
            disabled={loading}
            style={loading ? {opacity: 0.7, cursor: 'not-allowed'} : {}}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
        
        <p className="auth-switch">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;