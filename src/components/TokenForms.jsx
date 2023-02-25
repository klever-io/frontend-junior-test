import React, { useState } from 'react';
import './TokenForms.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Star from '../assets/shooting-star.svg';

function TokenForms() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [balance, setBalance] = useState(0);

  return (
    <div className="tokenForms">

      <div className="tokenFormsTop">
        <img src={Star} alt="" width="45px" />
        <h2>Wish Wallet</h2>
        { pathname === '/'
        && (
        <button
          type="button"
          onClick={() => navigate('/add')}
        >
          Add Token
        </button>
        )}
      </div>

      { pathname !== '/'
      && (
      <div>
        <div className="tokenFormsMid">
          { pathname === '/add'
            ? <h3>Add Token</h3>
            : <h3>Edit Token</h3> }

          <button
            type="button"
            onClick={() => navigate('/')}
          >
            Voltar
          </button>
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
          <br />
          <br />

          <div className="botButtons">
            {pathname === '/edit'
            && <button type="button" className="remButton">Remove</button>}
            <button type="button" className="saveButton">Save</button>
          </div>
        </div>

      </div>
      )}

    </div>
  );
}

export default TokenForms;
