import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'

function AddToken() {
  const navigate = useNavigate();

  const [token, setToken] = useState('');
  const [balance, setBalance] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useMemo(() => {
    if (token.length > 0 && balance.length > 0) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }

  }, [token, balance])

  const handleClickSave = () => {
    const tokenForLocalStorage = JSON.parse(localStorage.getItem('tokens') || '[]');
    tokenForLocalStorage.push({ tok: token, bal: balance });
    localStorage.setItem('tokens', JSON.stringify(tokenForLocalStorage));
    navigate('/');
  }

  const verifyDuplicateToken = () => {
    const tokenStorage = JSON.parse(localStorage.getItem('tokens') || '[]');
    const isDuplicate = tokenStorage.find(({ tok }) => tok === token) ? true : false;
    if (isDuplicate === true) {
      alert('This token already exists, choose another name please.');
    } else {
      handleClickSave()
    }
  }

  return (
    <div>
      <Header />
      <div>
        <span>Add Token</span>
        <button
          type="button"
          onClick={ () => navigate('/') }
        >
          Back
        </button>
        <form>
          <label htmlFor="token">
            Token
            <input
              type="text"
              name="token"
              id="token"
              value={ token }
              placeholder="Token Name"
              onChange={ ({ target }) => setToken(target.value.toLocaleUpperCase()) }
              required
            />
          </label>
          <label htmlFor="balance">
            Balance
            <input
              type="number"
              name="balance"
              id="balance"
              value={ balance }
              placeholder="Value"
              onChange={ ({ target }) => setBalance(target.value) }
              required
            />
          </label>
        </form>
        <button
          type="button"
          onClick={ verifyDuplicateToken }
          disabled={ isDisabled }
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default AddToken