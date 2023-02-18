import React from "react";
import Button from "./Button";

function Form({ value, onInputChange, onButtonClick, isEdit }) {
  return (
    <form className="wallet-form">
      <label htmlFor="token">
        Token
        <input
          type="text"
          id="token"
          name="token"
          value={ value.token }
          onChange={ onInputChange }
        />
      </label>
      <label htmlFor="balance">
        Balance
        <input
          type="text"
          id="balance"
          name="balance"
          value={ value.balance }
          onChange={ onInputChange }
        />
      </label>
    <div className={ isEdit ? 'form-buttons-edit' : 'form-buttons'}>
    { isEdit && (
        <Button name="Remove" kind="remove" onButtonClick={ onButtonClick.remove } />
      )}
      <Button name="Save" onButtonClick={ onButtonClick.save } />
    </div>
    </form>
  );
}

export default Form;
