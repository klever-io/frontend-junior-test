import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { Container } from './styles';
import { editToken } from '../../Utils/localStorageWallet';


function EditTokenButton({ tokenValue, balanceValue }) {
  const editTokenStorage = () => {
    { tokenValue, balanceValue }
    editToken({ token: tokenValue, balance: balanceValue });
    // console.log(token);
    return false;
  }

  return (
    <Container>
      <Button
        name='Delete'
        type='button'
        color='#8C0303'
        link='/'
        redirectPage={ () => {} }
      />

      <Button
        name='Save'
        type='button'
        color='#B039BF'
        link='/'
        redirectPage={ () => editTokenStorage() }
      />
    </Container>
  );
}


EditTokenButton.propTypes = {
  tokenValue: PropTypes.string.isRequired,
  balanceValue: PropTypes.string.isRequired,
};

export default EditTokenButton;
