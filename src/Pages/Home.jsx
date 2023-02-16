import React from 'react';
import Header from '../Components/Header';
import Token from '../Components/Token';

function Home() {
  const tokenStorage = JSON.parse(localStorage.getItem('tokens') || '[]');

  return (
    <div>
      <Header />
      <div>
        <span>Tokens</span>
        <span>Balance</span>
      </div>
      <div>
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
