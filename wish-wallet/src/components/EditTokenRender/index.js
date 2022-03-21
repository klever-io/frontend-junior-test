import React, { useContext, useEffect } from 'react';
import Button from '../Button';
import { Container } from './styles';
import { editToken, getToken, removeToken } from '../../Utils/localStorageWallet';
import AppContext from '../Hooks/AppContext';
import { confirmRemove } from '../../Utils/confirmRemove';

function EditTokenRender() {
  const { 
    editItem,
    tokenValue,
    setTokenValue,
    balanceValue,
    setBalanceValue,
    setMessageErro,
  } = useContext(AppContext);

  const saveInput = () => {
    if (editItem === undefined) return false;
    const storage = getToken('wallet')[editItem]
    setTokenValue(storage.token);
    setBalanceValue(storage.balance);
  }

  const messageErroValidate = (message) => {
    setMessageErro(message);
    return false;
  };

  const editTokenStorage = () => {
    const edit = editToken(tokenValue, balanceValue, editItem);
    return typeof edit === 'string' ? messageErroValidate(edit) : true;
  };

  const removeTokenStorage = () => {
    removeToken(editItem);
    return true;
  };

  useEffect(() => {
    saveInput()
  }, []);
  
  return (
    <Container>
      <Button
        name='Delete'
        type='button'
        color='#8C0303'
        link='/'
        redirectPage={ () => confirmRemove(removeTokenStorage) }
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

export default EditTokenRender;
