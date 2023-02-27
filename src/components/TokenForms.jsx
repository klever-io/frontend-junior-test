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

  // useEffect(() => {
  //   const storedAssets = JSON.parse(localStorage.getItem('assets'));
  //   if (storedAssets && storedAssets.length > 0) {
  //     setAssets(storedAssets);
  //   }
  // }, [assets.length]);

  const handleInputChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSave = () => {
    if (assets) {
      const verify = assets.some(({ token }) => token === form.token);
      if (!verify) {
        setAssets([...assets, { ...form }]);
        localStorage.setItem('assets', JSON.stringify([...assets, form]));
        setForm({ token: '', balance: '' });
        navigate('/');
      }
    }
  };

  const handleRemove = () => {
    const remAssets = assets.filter(({ token }) => token !== form.token);
    setAssets(remAssets);
    setForm({ token: '', balance: '' });
    navigate('/');
    localStorage.setItem('assets', JSON.stringify(remAssets));
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
          <label htmlFor="Token">
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
          <label htmlFor="Balance">
            Balance
            <input
              type="text"
              name="balance"
              id="balance"
              value={form.balance}
              onChange={(e) => handleInputChange(e.target)}
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
