import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'

function AddToken() {
  const navigate = useNavigate();

  const [token, setToken] = useState('');
  const [balance, setBalance] = useState('');
  const [disabled, setDisabled] = useState(true);

  useMemo(() => {
    if (token.length > 0 && balance.length > 0) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }

  }, [token, balance])

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
              onChange={ ({ target }) => setToken(target.value) }
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
              onChange={ ({ target }) => setBalance(target.value) }
              required
            />
          </label>
        </form>
        <button
          type="button"
          disabled={ disabled }
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default AddToken