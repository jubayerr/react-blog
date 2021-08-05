import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <Link className="brand" to="/">Home</Link>
            </div>
        </div>
    );
};

export default Header;