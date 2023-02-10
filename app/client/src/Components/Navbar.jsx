import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import logo from '../assets/logo.png';
import ShareTwitterButton from './ShareTwitterButton';

const Navbar = () => {
    const { user } = UserAuth();

  return (
    <nav className="nav">
        <div className="nav-logo">
            <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>
        <ul className="nav-links">
            <li><Link to="/wish">Wish</Link></li>
            <li><Link to="/chat">Chat</Link></li>
            <li><Link to="/dream">Dream</Link></li>
        </ul>
        <div>
          <ShareTwitterButton />
        </div>
        <div className="nav-button">
            { user?.displayName ? (
            <Link to="/account"><button>{user.displayName}</button></Link> 
            ) : ( 
            <Link to="/signin"><button>Sign In</button></Link> 
            )}
        </div>
    </nav>
  )
};

export default Navbar;