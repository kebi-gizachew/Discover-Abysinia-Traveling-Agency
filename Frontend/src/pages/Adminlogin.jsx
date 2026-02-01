import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/loginSignup.css';
import 'remixicon/fonts/remixicon.css';
import "../styles/Adminlogin.css";
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
      const result = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include", 
        body: JSON.stringify({ email, password })
      });
  
      const data = await result.json();
      
      if (result.ok) { 
        console.log("Login successful", data);
        alert("Login successful!");
        navigate("/admin");
      } else {
        setError(data.message || "Login failed"); 
      }
    } catch (err) {
      setError(err.message || "Login failed. Please check your credentials.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="a-containers ">
      <div className="a-cards">
        <p className="returnToHome">
          <a href="/">
            <i className="ri-arrow-left-line"></i>Back to Home
          </a>
        </p>
        <h2>Welcome Back</h2>
        <p className="a-subtitle">Sign in to access Admin</p>
        
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
          <div className="i-group">
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
          <div className="i-group">
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
            className="a-btn"
            disabled={loading}
            style={loading ? {opacity: 0.7, cursor: 'not-allowed'} : {}}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;