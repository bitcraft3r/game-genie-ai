import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div>Copyright © GameGenieAI.com</div>
            <Link to="/badges">Badges</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/stats">Statistics</Link>
            <p>v0.1.0</p>
        </div>
    )
}

export default Footer