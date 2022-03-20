import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { setToken } from '../../Utils/saveToken';


function AddTokenButton({ tokenValue, balanceValue }) {
  const registerToken = () => {
    if (tokenValue === '' || balanceValue === '') return false;
    const register = setToken({ token: tokenValue, balance: balanceValue });
    return register;
  }

  return (
    <Button
      name='Save'
      type='button'
      color='#B039BF'
      link='/'
      redirectPage={ () => registerToken() }
    />
  );
}


AddTokenButton.propTypes = {
  tokenValue: PropTypes.string.isRequired,
  balanceValue: PropTypes.string.isRequired,
};

export default AddTokenButton;
