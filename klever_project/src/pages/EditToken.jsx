import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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
    <div>
      <h1>Wish Wallet</h1>
      <div>
        <h2>Edit Token</h2>
      </div>
      <div>
        Token
        <input type="text" value={token} onChange={handleInputToken} />
      </div>
      <div>
        Balance
        <input type="number" value={balance} onChange={handleInputBalance} />
      </div>
      <div>
        <button type="button" onClick={handleSubmit}>
          Save
        </button>
        <button type="button" onClick={handleDelete}>
          Remove
        </button>
      </div>
    </div>
  );
}
