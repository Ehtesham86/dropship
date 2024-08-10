import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import './header.css';

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
      setOpen(!open);
    };
  
    return (
      <div className="navbar-container">
        <div className="logo">Logo</div>
        <FaBars className="hamburger" onClick={handleToggle} />
        <ul className={`menu ${open ? 'open' : ''}`}>
          <li className="menu-item">Products</li>
          <li className="menu-item">Resources</li>
          <li className="menu-item">Pricing</li>
        </ul>
        <div className="nav-buttons">
          <a href="#" className="login-link">Log In</a>
          <button className="nav-button">Start Free Trial</button>
        </div>
      </div>
    );
}

export default Header;
