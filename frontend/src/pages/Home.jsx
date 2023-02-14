import React from 'react';
import Header from '../components/Header';
import WishWallet from '../components/WishWallet';
import Tonkens from '../components/Tokens';

function Home() {
  return (
    <div className="formContainer">
      <Header />
      <WishWallet />
      <Tonkens />
    </div>
  );
}

export default Home;