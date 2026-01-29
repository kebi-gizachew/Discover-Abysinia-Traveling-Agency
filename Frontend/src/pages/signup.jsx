import { useState } from "react";
import '../styles/loginSignup.css';
import 'remixicon/fonts/remixicon.css';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const url="http://localhost:5000/api/users/register";
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
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({ name, email, password, phone, country })
      });
      
      if (result.status === 201) {
        console.log("Signup successful");
        alert("Account created successfully! You are now logged in.");
        window.location.href = "/";
      } else {
        setError("Cannot sign you up" || "Signup failed");
      }
    } catch (err) {
      setError("Signup failed. Please try again.");
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
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={loading}
            />
          </div>
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
          <div className="input-group">
           <label>Phone</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="input-group">
           <label>Country</label>
            <input
              type="text"
              placeholder="Enter your country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
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
        
        <div style={{marginTop: '20px', fontSize: '12px', color: '#666'}}>
          <p>Note: Use at least 8 characters for password</p>
          <p>Test with: testuser@example.com / 12345678</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;