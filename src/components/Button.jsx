import React from 'react';

function Button({ name, kind, onButtonClick, isDisabled }) {
  const setButtonStyle = () => {
    const styleOptions = {
      remove: 'remove-button',
      back: 'back-button',
    }
    return kind ? styleOptions[kind] : 'default-button';
  }

  return (
    <button 
      type="button" 
      onClick={ onButtonClick } 
      className={ setButtonStyle() }
      disabled={ isDisabled }
    >
     { name }
    </button>
  );
}

export default Button;