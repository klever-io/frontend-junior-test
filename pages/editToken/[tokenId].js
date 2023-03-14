import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

import BackButton from '../../components/buttons/BackButton'
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
      <BackButton />
      <EditTokenForm
      token={tokenToEdit.token}
      balance={tokenToEdit.balance}
      indexOfToken={tokenId}
      />
    </div>
  )
}

export default tokenId
