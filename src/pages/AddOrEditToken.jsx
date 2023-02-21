import WalletHeader from '../components/WalletHeader';
import Form from '../components/Form';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function AddOrEditToken() {
  const location = useLocation();
  const [inputValues, setInputValues] = useState({ token: '', balance: '' });
  
  const handleChange = ({ target }) => {
    setInputValues({ ...inputValues, [target.name]:target.value });
  }
  
  const isButtonDisabled = () => inputValues.token === '' || inputValues.balance === '';

  const saveToken = () => {
    if (!JSON.parse(localStorage.getItem('tokenList'))) {
      localStorage.setItem('tokenList', JSON.stringify([inputValues]));
    } else {
      const storageTokens = JSON.parse(localStorage.getItem('tokenList'));
      const tokenList = [...storageTokens, inputValues];
      localStorage.setItem('tokenList', JSON.stringify(tokenList));
    }
  
  };
  const removeToken = () => console.log('removeToken');

  const tokenControl = {
    save: saveToken,
    remove: removeToken,
  }

  return (
    <>
    <WalletHeader />
    <Form 
      isEdit={ location.pathname === '/edit-token' }
      value={ inputValues }
      onInputChange={ (e) => handleChange(e) }
      onButtonClick={ tokenControl }
      isButtonDisabled={ isButtonDisabled() }
    />
    </>
  )
}

export default AddOrEditToken;