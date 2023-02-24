import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Star from '../assets/shooting-star.svg';

function TokenForms() {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [balance, setBalance] = useState(0);

  return (
    <div className="tokenForms">

      <div className="tokenFormsTop">
        <img src={Star} alt="" width="45px" />
        <h2>Wish Wallet</h2>
        <button type="button">Add Token</button>
      </div>

      <div className="tokenFormsMid">
        <h3>Add Token</h3>
        <button type="button">Voltar</button>
      </div>

      <div className="tokenFormsBot">
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
  );
}

export default TokenForms;
