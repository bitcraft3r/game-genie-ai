import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <Link to="/stats">Statistics</Link>
        </div>
    )
}

export default Footer