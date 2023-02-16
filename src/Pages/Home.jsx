import React from 'react';
import Header from '../Components/Header';
import Token from '../Components/Token';
import '../CSS/home.css';

function Home() {
  const tokenStorage = JSON.parse(localStorage.getItem('tokens') || '[]');

  return (
    <div>
      <Header />
      <div className="span-token-container">
        <span id="token-span">Tokens</span>
        <span id="balance-span">Balance</span>
      </div>
      <div className='token-container'>
        { tokenStorage && tokenStorage.map((token, index) =>(
          <Token
            token={ token.tok }
            balance={ token.bal }
            key={ index }
          />
        )) }
      </div>
    </div>
  )
}

export default Home;
