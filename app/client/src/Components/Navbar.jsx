import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="nav">
        <div className="nav-logo">
            <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>
        <ul className="nav-links">
            <li><Link to="/craft">Craft</Link></li>
            <li><Link to="/chat">Chat</Link></li>
            <li><Link to="/dream">Dream</Link></li>
        </ul>
    </nav>
  )
};

export default Navbar;