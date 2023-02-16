import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import '../CSS/addToken.css';

function AddToken() {
  const navigate = useNavigate();

  const [token, setToken] = useState('');
  const [balance, setBalance] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useMemo(() => {
    if (token.length > 0 && balance.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    };

  }, [token, balance])

  const handleClickSave = () => {
    const tokenForLocalStorage = JSON.parse(localStorage.getItem('tokens') || '[]');
    tokenForLocalStorage.push({ tok: token, bal: balance });
    localStorage.setItem('tokens', JSON.stringify(tokenForLocalStorage));
    navigate('/');
  };

  const handleChange = ({ target }) => {
    const targetValue = target.value;
    const regex = /^[0-9.,]+$/;
    const regexValidation =  targetValue.length === 0 ? true : regex.test(targetValue);
    const maxLengthBalance = 12;
    if (regexValidation && targetValue.length < maxLengthBalance) setBalance(targetValue);
  };

  const verifyDuplicateToken = () => {
    const tokenStorage = JSON.parse(localStorage.getItem('tokens') || '[]');
    const isDuplicate = tokenStorage.find(({ tok }) => tok === token) ? true : false;
    if (isDuplicate === true) {
      alert('This token already exists, choose another name please.');
    } else {
      handleClickSave()
    };
  };

  return (
    <div>
      <Header />
      <div className="add-token-container">
        <div className="add-top-container">
          <span id="add-span">Add Token</span>
          <button
            id="back-button"
            type="button"
            onClick={ () => navigate('/') }
          >
            Back
          </button>
        </div>
        <form className="add-form-container">
          <label htmlFor="token-input">
            Token
            <input
              type="text"
              name="token"
              id="token-input"
              value={ token }
              placeholder="Token Name"
              onChange={ ({ target }) => setToken(target.value.toLocaleUpperCase()) }
              maxLength="6"
              required
            />
          </label>
          <label htmlFor="balance-input">
            Balance
            <input
              type="text"
              name="balance"
              id="balance-input"
              value={ balance }
              placeholder="Value"
              onChange={ handleChange }
              min="1"
              max="5"
              required
            />
          </label>
          <button
            id="save-button"
            type="button"
            onClick={ verifyDuplicateToken }
            disabled={ isDisabled }
          >
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddToken;
