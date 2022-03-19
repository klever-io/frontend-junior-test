import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { Container, FormContent, ContentButton } from './styles';

function Form({ title }) {
  return (
    <Container>
      <FormContent>
        <div>
          <p>{ title }</p>

          <Button
            name='Voltar'
            type='button'
            color='#616161'
            link='/'
            redirectPage={ true }
            />
        </div>

        <label htmlFor='token-input'>Token</label>
          <input
            type='text'
            id='token-input'
            name='token-input'
            />

        <label htmlFor='balance-input'>Balance</label>
          <input
            type='text'
            id='balance-input'
            name='balance-input'
            />
      </FormContent>
      <ContentButton>
        <Button
          name='Save'
          type='button'
          color='#B039BF'
          link='/'
          redirectPage={ true }
        />
      </ContentButton>
    </Container>
  );
}


Form.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Form;
