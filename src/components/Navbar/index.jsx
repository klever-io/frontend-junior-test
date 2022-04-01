import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';
const Navbar = () => {
    const navigate = useNavigate();
    const handleNavigationForHomeRoute = () => navigate('/');
    return (
        <header className="nav-container">
            <img src="/logo.svg" alt="brand" onClick={handleNavigationForHomeRoute} />
        </header>
    );
};

export default Navbar;
