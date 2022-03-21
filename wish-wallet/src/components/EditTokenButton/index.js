import React, { useContext, useEffect } from 'react';
import Button from '../Button';
import { Container } from './styles';
import { editToken, getToken } from '../../Utils/localStorageWallet';
import AppContext from '../Hooks/AppContext';


function EditTokenButton() {
  const { 
    editItem,
    tokenValue,
    setTokenValue,
    balanceValue,
    setBalanceValue
  } = useContext(AppContext);
  
  const saveInput = () => {
    if (editItem === undefined) return false;
    const storage = getToken('wallet')[editItem]
    setTokenValue(storage.token);
    setBalanceValue(storage.balance);
  }
  
  useEffect(() => {
    saveInput()
  }, []);

  const editTokenStorage = () => {
    editToken(tokenValue, balanceValue, editItem);
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

export default EditTokenButton;
