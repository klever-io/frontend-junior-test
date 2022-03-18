import React from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';

function Form({ title }) {
  return (
    <div>
      <form>
        <p>{ title }</p>
        <Button
          name='Voltar'
          type='button'
          color='#616161'
          link='/'
          redirectPage={ true }
        />

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


Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Form;
