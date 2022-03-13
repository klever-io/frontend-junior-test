import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ style, children, onClick, hidden }) => {
    let handleClassName;
    switch (style) {
        case 'remove':
            handleClassName = 'klever-remove-btn';
            break;
        case 'primary':
            handleClassName = 'klever-primary-btn';
            break;
        case 'btn':
            handleClassName = 'klever-btn';
    }
    return (
        <>
            <button
                className={handleClassName}
                onClick={onClick}
                type="button"
                style={{ visibility: hidden }}
            >
                {children}
            </button>
        </>
    );
};

Button.propTypes = {
    children: PropTypes.string,
    primary: PropTypes.bool,
    pathTo: PropTypes.string,
    type: PropTypes.string,
    dispatch: PropTypes.object,
};
export default Button;
