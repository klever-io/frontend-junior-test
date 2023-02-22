import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import WalletHeader from '../components/WalletHeader';
import Form from '../components/Form';

function AddOrEditToken() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [inputValues, setInputValues] = useState({ token: '', balance: '' });
  const [errorMessage, setErrorMessage] = useState({ token: '', balance: '' });

  useEffect(() => {
    if (location.pathname.includes('/edit-token')) {
      const tokens = JSON.parse(localStorage.getItem('tokenList'));
      if (tokens) {
        const editValues = tokens.find((token) => token.token === id);
        setInputValues({
          token: editValues.token,
          balance: editValues.balance,
        });
      }
    }
  }, [location, id]);

  const handleChange = ({ target }) => {
    setInputValues({ ...inputValues, [target.name]: target.value });
  };

  const isButtonDisabled = () =>
    inputValues.token === '' || inputValues.balance === '';

  const saveToken = () => {
    const tokens = JSON.parse(localStorage.getItem('tokenList'));
    if (!tokens) {
      localStorage.setItem('tokenList', JSON.stringify([inputValues]));
    } else {
      const storageTokenList = JSON.parse(localStorage.getItem('tokenList'));
      const validateIfTokenExists = storageTokenList.some(
        (item) => item.token === inputValues.token
      );
      if (validateIfTokenExists) {
        setErrorMessage({ token: 'That token already exists!' });
        return;
      }
      setErrorMessage('');
      const tokenList = [...storageTokenList, inputValues];
      localStorage.setItem('tokenList', JSON.stringify(tokenList));
    }
    navigate('/');
  };

  const editToken = () => console.log('editToken');
  const removeToken = () => console.log('removeToken');

  const saveOrEdit = () => {
    if (location.pathname === '/add-token') {
      return saveToken();
    }
    if (location.pathname === '/edit-token') {
      return editToken();
    }
  };

  const tokenControl = {
    save: saveOrEdit,
    remove: removeToken,
  };

  return (
    <>
      <WalletHeader />
      <Form
        isEdit={ location.pathname === '/edit-token' }
        value={ inputValues }
        onInputChange={ (e) => handleChange(e) }
        onButtonClick={ tokenControl }
        errorMessage={ errorMessage }
        isButtonDisabled={ isButtonDisabled() }
      />
    </>
  );
}

export default AddOrEditToken;
