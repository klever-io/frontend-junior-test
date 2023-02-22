import React from 'react';
import Button from './Button';

function Alert({ ok, cancel, message }) {
  return (
    <div className="alert-container">
      <div className="alert-card">
        <h1 className="alert-message">{ message }</h1>
        <div className="alert-buttons">
          <Button onButtonClick={ ok } name="Ok" isDisabled={ false } />
          <Button onButtonClick={ cancel } name="Cancel" kind="remove" />
        </div>
      </div>
    </div>
  )
}

export default Alert;