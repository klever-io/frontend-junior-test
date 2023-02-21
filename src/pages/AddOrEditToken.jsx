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

  const saveToken = () => console.log('saveToken');
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