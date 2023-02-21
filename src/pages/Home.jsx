import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../components/Table';
import WalletHeader from '../components/WalletHeader';

function Home() {
  const [tokenList, setTokenList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tokens = JSON.parse(localStorage.getItem('tokenList'));
    if (tokens) {
     setTokenList(tokens);
    }
  }, []);

  const tableHeaders = [
    { name: '', key: 'button' },
    { name: 'Tokens', key: 'token' },
    { name: 'Balance', key: 'balance' }
  ];

  const goToEdit = (data) => {
    navigate(`/edit-token/${data.token}`);
  }

  return (
    <div>
      <WalletHeader isHomePage />
      <Table
        headers={ tableHeaders }
        tableData={ tokenList }
        onEditClick={ goToEdit }
      />
    </div>
  )
}

export default Home;