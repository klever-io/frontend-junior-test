import React from 'react';
import useNavigated from '../../hooks/useNavigate';
import './style.css';
const Navbar = () => {
    const navigateTo = useNavigated('/');
    return (
        <header className="nav-container">
            <img src="/logo.svg" alt="brand" onClick={navigateTo} />
        </header>
    );
};

export default Navbar;
