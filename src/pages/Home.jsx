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

  const tableHeaders = ['Tokens', 'Balance'];

  const goToEdit = (data) => {
    navigate(`/edit-token/${data.token}`);
  }

  return (
    <>
      <WalletHeader isHomePage />
      <Table
        headers={ tableHeaders }
        tableData={ tokenList }
        onEditClick={ goToEdit }
      />
    </>
  )
}

export default Home;