import React, { useState } from 'react'
import Star from '../assets/shooting-star.svg'
import { useNavigate } from 'react-router-dom'

function TokenForms() {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [balance, setBalance] = useState(0);

  return (
    <div className='tokenForms'>
      <div className='tokenFormHeader'>
        <h2>Add Token</h2>
        <button type='button'>Voltar</button>
      </div>
      <div className='TokenFormsTop'>
        <img src={ Star } alt="" width="45px"/>
        <h2>Wish Wallet</h2>
        <button type='button'>Add Token</button>
      </div>
      <div className='TokenFormsBot'>
        <label htmlFor="Token">
          Token
          <input type="text" name="Token" id="Token" />
        </label>
        <br />
        <br />
        <label htmlFor="Balance">
          Balance
          <input type="text" name="Balance" id="Balance" />    
        </label>
      </div>
    </div>
  )
}

export default TokenForms