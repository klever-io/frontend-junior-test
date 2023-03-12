import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import EditTokenForm from '../../components/sections/EditTokenForm';
import { getLocalStorage } from '../../utils/localStorage'

function tokenId() {
  const [tokenToEdit, setTokenToEdit] = useState({ token: '', balance: '' });

  useEffect(() => {
    restoreToken()
  }, [])

  const router = useRouter();
  const tokenId = router.query.tokenId

  const restoreToken = () => {
  const tokensFromLocalStorage = getLocalStorage('tokensData');
  console.log(tokensFromLocalStorage);
  if (tokensFromLocalStorage && tokensFromLocalStorage[tokenId]) {
    setTokenToEdit(tokensFromLocalStorage[tokenId]);
  }
};


  return (
    <div>
      <div>Editando o token {tokenId}</div>
      <EditTokenForm
      token={tokenToEdit.token}
      balance={tokenToEdit.balance}
      indexOfToken={tokenId}
      />
      <div>{tokenToEdit.token}</div>
      <div>{tokenToEdit.balance}</div>
    </div>
  )
}

export default tokenId