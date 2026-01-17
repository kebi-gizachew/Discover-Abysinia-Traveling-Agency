import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="header-div">
      <h1>Discover Abysinia</h1>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>

      {/* Fullscreen overlay menu */}
      <ul className={`nav-header ${isOpen ? 'open' : ''}`}>
        <li className="header-link">
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        </li>
        <li className="header-link">
          <NavLink to="/destination" onClick={() => setIsOpen(false)}>Destinations</NavLink>
        </li>
        <li className="header-link">
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </li>
         <li className="header-link">
          <NavLink to="/booking" onClick={() => setIsOpen(false)}>Booking</NavLink>
        </li>
        <li className="header-link header-link-login">
          <NavLink to="/login" onClick={() => setIsOpen(false)}>Login</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
