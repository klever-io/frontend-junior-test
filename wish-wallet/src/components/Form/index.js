import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { Container, FormContent, ContentButton } from './styles';
import { setToken } from '../../Utils/saveToken';


function Form({ title }) {
  const [tokenValue, setTokenValue] = useState('');
  const [balanceValue, setBalanceValue] = useState('');

  const registerToken = () => {
    if (tokenValue === '' || balanceValue === '') return false;
    const register = setToken({ token: tokenValue, balance: balanceValue });
    console.log(register)
    return register;
  }

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
            redirectPage={ () => true }
            />
        </div>

        <label htmlFor='token-input'>Token</label>
          <input
            type='text'
            id='token-input'
            name='token-input'
            maxLength={ 3 }
            autoComplete="off"
            value={ tokenValue }
            onChange={ ({ target: { value }}) => setTokenValue(value.toLocaleUpperCase()) }
            />

        <label htmlFor='balance-input'>Balance</label>
          <input
            type='number'
            id='balance-input'
            name='balance-input'
            value={ balanceValue }
            onChange={ ({ target: { value }}) => setBalanceValue(value) }
          />
      </FormContent>
      <ContentButton>
        
        <Button
          name='Save'
          type='button'
          color='#B039BF'
          link='/'
          redirectPage={ () => registerToken() }
        />
      </ContentButton>
    </Container>
  );
}


Form.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Form;
