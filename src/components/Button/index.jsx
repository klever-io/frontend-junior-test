import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Button = ({ primary, children, pathTo }) => {
    const navigate = useNavigate();
    const handleNavigate = () => navigate(pathTo);
    const handleClassName = primary ? 'klever-primary-btn' : 'klever-btn';
    return (
        <button className={handleClassName} onClick={handleNavigate}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.string,
    primary: PropTypes.bool,
    pathTo: PropTypes.string,
};
export default Button;
