import React from 'react';

import './style.css';

const Button = ({ style, children, onClick, hidden }) => {
    const showButton = {
        visibility: hidden,
    };
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
            <button className={handleClassName} onClick={onClick} type="button" style={showButton}>
                {children}
            </button>
        </>
    );
};

export default Button;
