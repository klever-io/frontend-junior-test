import React from "react";
import Button from "./Button";

function Form({
  value,
  onInputChange,
  onButtonClick,
  isEdit,
  isButtonDisabled,
  errorMessage,
}) {
  return (
    <form className="wallet-form">
      <label htmlFor="token">
        Token
        <input
          type="text"
          id="token"
          name="token"
          value={value.token}
          onChange={onInputChange}
        />
        {errorMessage.token && <span>{errorMessage.token}</span>}
      </label>
      <label htmlFor="balance">
        Balance
        <input
          id="balance"
          name="balance"
          type="text" 
          inputMode="numeric"
          pattern="[0-9]*"
          value={value.balance}
          onChange={onInputChange}
        />
        {errorMessage.balance && <span>{errorMessage.balance}</span>}
      </label>
      <div className={isEdit ? "form-buttons-edit" : "form-buttons"}>
        {isEdit && (
          <Button
            name="Remove"
            kind="remove"
            onButtonClick={onButtonClick.remove}
          />
        )}
        <Button
          name="Save"
          onButtonClick={onButtonClick.save}
          isDisabled={isButtonDisabled}
        />
      </div>
    </form>
  );
}

export default Form;
