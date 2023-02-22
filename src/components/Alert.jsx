import React from 'react';
import Button from './Button';

function Alert({ ok, cancel, message }) {
  return (
    <div className="alert-container">
      <p className="alert-message">{ message }</p>
      <Button onButtonClick={ ok } name="Ok" />
      <Button onButtonClick={ cancel } name="Cancel" kind="remove" />
    </div>
  )
}

export default Alert;