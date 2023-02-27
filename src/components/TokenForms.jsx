import React, { useContext } from 'react';
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

  const handleInputChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSave = () => {
    const verify = assets.some(({ token }) => token === form.token);
    if (!verify) {
      setAssets([...assets, { ...form }]);
      localStorage.setItem('assets', JSON.stringify([...assets, form]));
    }
    setForm({ token: '', balance: '' });
    navigate('/');
  };

  const handleRemove = () => {
    const remAssets = assets.filter(({ token }) => token !== form.token);
    setAssets(remAssets);
    setForm({ token: '', balance: '' });
    navigate('/');
    localStorage.setItem('assets', JSON.stringify(remAssets));
  };

  const allowedChars = (e) => {
    const chars = /[0-9]|\.|Backspace/;

    if (!chars.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="tokenForms">

      <div className="tokenFormsTop">
        <img src={Star} alt="" width="45px" />
        <h2>Wish Wallet</h2>
        { pathname === '/'
        && (
        <button
          className="addTokenButton"
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
          <label htmlFor="token">
            Token
            <input
              type="text"
              name="token"
              id="token"
              value={form.token}
              onChange={(e) => handleInputChange(e.target)}
            />
          </label>
          <br />
          <br />
          <label htmlFor="balance">
            Balance
            <input
              type="text"
              name="balance"
              id="balance"
              value={form.balance}
              onChange={(e) => handleInputChange(e.target)}
              onKeyDown={(e) => allowedChars(e)}
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
