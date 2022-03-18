import React from 'react';
import { Header } from '../components';
import { TableWallet } from '../components';
import kleverLogo from '../images/logo.svg';
import starLogo from '../images/shooting-star.svg';

function Home() {
  return (
    <div>
      <Header kleverLogo={ kleverLogo } starLogo={ starLogo } btn={ true }/>
      <TableWallet />
    </div>
  );
}

export default Home;
