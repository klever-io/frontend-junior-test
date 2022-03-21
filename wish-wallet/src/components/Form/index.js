import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { Container, FormContent, ContentButton } from './styles';
import AddTokenButton from '../AddTokenButton';
import EditTokenButton from '../EditTokenButton';
import AppContext from '../Hooks/AppContext';

function Form({ title }) {

  const { 
    setTokenValue, 
    setBalanceValue,
    tokenValue,
    balanceValue
  } = useContext(AppContext);

  const handleForm = () => {
    const typeForm = (
    title === 'Add Token'
      ? <AddTokenButton />
      : <EditTokenButton />
    )
    return typeForm;
  };

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
        { handleForm() }
      </ContentButton>
    </Container>
  );
}


Form.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Form;
