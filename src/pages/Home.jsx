import React from 'react';
import Table from '../components/Table';
import WalletHeader from '../components/WalletHeader';

function Home() {
  return (
    <>
      <WalletHeader isHomePage />
      <Table />
    </>
  )
}

export default Home;