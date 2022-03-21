import React, { useContext } from 'react';
import Button from '../Button';
import { setToken } from '../../Utils/localStorageWallet';
import AppContext from '../Hooks/AppContext';

function AddTokenButton() {
  const { tokenValue, balanceValue, setMessageErro } = useContext(AppContext);

  const messageErroValidate = (message) => {
    setMessageErro(message);
    return false;
  };

  const registerToken = () => {
    if (tokenValue === '' || balanceValue === '') return false;
    const register = setToken({ token: tokenValue, balance: balanceValue });
    return typeof register === 'string' ? messageErroValidate(register) : true;
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

export default AddTokenButton;
