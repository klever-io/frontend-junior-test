import React from 'react'

function TokensTable() {
  return (
    <table className='tokensTable'>
      <thead className='thead'>
        <tr className='trhead'>
          <th>Tokens</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody className='tbody'>
        <tr className='trbody'>
          <td>Token</td>
          <td>Value</td>
        </tr>
      </tbody>
    </table>
  )
}

export default TokensTable