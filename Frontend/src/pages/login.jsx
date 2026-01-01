import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/loginSignup.css';
import 'remixicon/fonts/remixicon.css';
import { authService } from '../../services/authService'; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    setLoading(true); 

    try {
      const result = await authService.login(email, password);
      
      if (result.success) {
        console.log("Login successful:", result);
        navigate("/");
      } else {
        setError(result.message || "Login failed");
      }
    } catch (err) {
      setError(err.message || "Login failed. Please check your credentials.");
      console.error("Login error:", err);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="auth-container discover-container">
      <div className="discover-hero">
        <h1 className="discover-title">Discover Abisiniya</h1>
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
        <h2>Welcome Back</h2>
        <p className="auth-subtitle">Sign in to access your travel bookings</p>
        
        {error && (
          <div style={{
            backgroundColor: '#fee',
            border: '1px solid #fcc',
            color: '#c33',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '15px',
            fontSize: '14px'
          }}>
            <i className="ri-error-warning-line" style={{marginRight: '8px'}}></i>
            {error}
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        
        <p className="auth-switch">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
        
        <div style={{marginTop: '20px', fontSize: '12px', color: '#666'}}>
          <p>Test with:</p>
          <p>• Email: test@fix.com</p>
          <p>• Password: 12345678</p>
        </div>
      </div>
    </div>
  );
};

export default Login;