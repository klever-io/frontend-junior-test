import React from 'react';

function Form() {
  return (
    <div>
      <form>
        <label>
          Token
          <input
            type='text'
            id='token-input'
            name='token-input'
            />
        </label>

        <label>
          Balance
          <input
            type='text'
            id='balance-input'
            name='balance-input'
            />
        </label>
      </form>
    </div>
  );
}

export default Form;
