import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { Container, FormContent } from './styles';

function Form({ title }) {
  return (
    <Container>
      <FormContent>
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
      </FormContent>
    </Container>
  );
}


Form.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Form;
