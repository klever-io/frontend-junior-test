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
    setInputValues((value) => target.validity.valid ? {...inputValues, [target.name]: target.value } : value);
  };

  const isButtonDisabled = () =>
    inputValues.token === '' || inputValues.balance === '';

  const saveToken = () => {
    const storageTokenList = JSON.parse(localStorage.getItem('tokenList'));
    if (!storageTokenList) {
      localStorage.setItem('tokenList', JSON.stringify([inputValues]));
    } else {
    const regex = new RegExp(/^[0-9]+$/);
    const match = regex.test(inputValues.balance);
    if (!match) {
      setErrorMessage({ balance: 'Only numeric characters!' });
      return;
    }
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

  const editToken = () => {
    const storageTokenList = JSON.parse(localStorage.getItem('tokenList'));
    const tokensWithDifferentId = storageTokenList.filter((token) => token.token !== id);
    const validateIfTokenExists = tokensWithDifferentId.some(
      (item) => item.token === inputValues.token);
    if (validateIfTokenExists) {
      setErrorMessage({ token: 'That token already exists!' });
      return;
    }
    const tokenList = [...tokensWithDifferentId, inputValues];
    localStorage.setItem('tokenList', JSON.stringify(tokenList));
    navigate('/');
  }

  const removeToken = () => {
    const storageTokenList = JSON.parse(localStorage.getItem('tokenList'));
    const tokensWithDifferentId = storageTokenList.filter((token) => token.token !== id);
    localStorage.setItem('tokenList', JSON.stringify(tokensWithDifferentId));
    navigate('/');
  }

  const saveOrEdit = () => {
    if (location.pathname === '/add-token') {
      return saveToken();
    }
    if (location.pathname.includes('/edit-token')) {
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
        isEdit={ location.pathname.includes('/edit-token') }
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
