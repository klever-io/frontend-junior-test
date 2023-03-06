import React, { useState } from 'react'

const mockArray = [
  {
    name: 'KLV',
    balance: '10,250.50',
  },
  {
    name: 'DVK',
    balance: '50,250.71',
  },
  {
    name: 'KFI',
    balance: '10,250.50',
  },
]

export default function TokensList() {
  const [tokens, setTokens] = useState(mockArray)

  // Map of values of Tokens and Balance
  const listTokens = (tokens) => {
    return tokens.map((token) => (
      <div className='flex justify-center items-center p-2'>
        <div className='flex justify-between items-center p-2 w-80 sm:w-3/4 max-w-2xl font-black text-3xl'>
          <span className='ml-4'>{token.name}</span>
          <span>{token.balance}</span>
        </div>
      </div> 
    ));
  }


  return (
    tokens.length > 0 ? (
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
    : 'Não há'
  )
}

