import React, { useContext, useEffect } from 'react';
import './TokenForms.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Star from '../assets/shooting-star.svg';
import AssestsContext from '../context/AssetsContext';

function TokenForms() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const {
    assets, setAssets, form, setForm,
  } = useContext(AssestsContext);

  const validateButton = !(form.token && form.balance);

  const handleSave = () => {
    setAssets(assets.concat(form));
    setForm({ token: '', balance: '' });
  };

  const handleRemove = () => {
    const remAssets = assets.filter(({ token }) => token !== form.token);
    setAssets(remAssets);
    setForm({ token: '', balance: '' });
  };

  useEffect(() => {
    localStorage.setItem('assets', JSON.stringify(assets));
  }, [assets.length]);

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
            <input
              type="text"
              name="Token"
              id="Token"
              value={form.token}
              onChange={(e) => setForm({ ...form, token: e.target.value })}
            />
          </label>
          <br />
          <br />
          <label htmlFor="Balance">
            Balance
            <input
              type="text"
              name="Balance"
              id="Balance"
              value={form.balance}
              onChange={(e) => setForm({ ...form, balance: e.target.value })}
            />
          </label>
          <br />
          <br />

          <div className="botButtons">
            {pathname === '/edit'
            && (
              <button
                type="button"
                className="remButton"
                disabled={validateButton}
                onClick={() => handleRemove()}
              >
                Remove
              </button>
            )}
            <button
              type="button"
              className="saveButton"
              disabled={validateButton}
              onClick={() => handleSave()}
            >
              Save
            </button>
          </div>

        </div>
      </div>
      )}

    </div>
  );
}

export default TokenForms;
