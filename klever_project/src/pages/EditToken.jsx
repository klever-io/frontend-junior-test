import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../assets/logo.svg'
import shooting from '../assets/shooting-star.svg'

export default function EditToken(props) {
  const [token, setToken] = useState('');
  const [balance, setBalance] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const tokenStorage = JSON.parse(localStorage.getItem('token'));
    const balanceStorage = JSON.parse(localStorage.getItem('balance'));

    if (tokenStorage && balanceStorage) {
      setToken(tokenStorage);
      setBalance(balanceStorage);
    }
  }, []);

  const handleInputToken = (e) => {
    setToken(e.target.value);
  };

  const handleInputBalance = (e) => {
    setBalance(e.target.value);
  };

  const handleSubmit = () => {
    const tableData = JSON.parse(localStorage.getItem('table')) || [];
    const updatedData = tableData.map((data) => {
      if (data.token === props.location.state.token) {
        return {
          ...data,
          token,
          balance,
        };
      }
      return data;
    });
    localStorage.setItem('table', JSON.stringify(updatedData));
    history.push('/');
  };

  const handleDelete = () => {
    const tableData = JSON.parse(localStorage.getItem('table')) || [];
    const updatedData = tableData.filter(
      (data) => data.token !== props.location.state.token
    );
    localStorage.setItem('table', JSON.stringify(updatedData));
    localStorage.removeItem('token');
    localStorage.removeItem('balance');
    history.push('/');
  };

  return (
    <div className='div-root'>
      <img className='logo-klever' src={logo} alt='logo' />
      <div className='div-header'>
      <img className='shooting-star'src={shooting} alt='shooting-star' />
      <h1 className='title-wallet'>Wish Wallet</h1>
      </div>
      <div className='div-title'>
        <h2 className='second-title'>Edit Token</h2>
        <Link to="">
        <button
        className='button-back'
        type='button'
        >
        Voltar 
        </button>
        </Link>
      </div>
      <div className='div-label'>
        Token
        <input type="text" value={token} onChange={handleInputToken} />
        Balance
        <input type="number" value={balance} onChange={handleInputBalance} />
      </div>

      <div className='buttons-edit'>
      <button className='button-remove' type="button" onClick={handleDelete}>
          Remove
        </button>
        
        <button className='button-save' type="button" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}
