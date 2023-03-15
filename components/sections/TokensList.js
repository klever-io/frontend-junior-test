import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import numeral from 'numeral';

import { getLocalStorage } from '../../utils/localStorage';
import EditButton from '../buttons/EditButton';

export default function TokensList() {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    restoreTokensOnload()
  }, []);

  const restoreTokensOnload = () => {
    const tokensFromLocalStorage = getLocalStorage();
    setTokens(tokensFromLocalStorage);  
  };

  // Map of values of Tokens and Balance
  const listTokens = (tokens) => {       
    return tokens.map((token, index) => (
      <div className='flex justify-center items-center p-2'>
        <Link href={`editToken/${index}`}>
          <EditButton/>
        </Link>
        <div key={index} className='flex justify-between items-center p-2 w-80 sm:w-3/4 max-w-2xl font-black text-3xl'>
          <span className='ml-1'>{token.token}</span>
          <span>{numeral(token.balance).format('0,0.00')}</span>
        </div>
      </div> 
    ));
  }


  return (
    (tokens && tokens.length > 0) ? (
      <div className='text-white'>
        <div className='flex justify-center items-center p-2'>
          <div className='flex justify-between items-center p-2 w-80 sm:w-3/4 max-w-2xl font-semibold text-lg'>
            <span className='ml-4'>Tokens</span>
            <span>Balance</span>
          </div>
        </div>
        {listTokens(tokens)}
      </div>
    )
    : <div className='flex justify-center mt-16'>
        <h2 className='text-white font-black text-xl'>Não há tokens cadastrados</h2>
      </div>
  );
}

