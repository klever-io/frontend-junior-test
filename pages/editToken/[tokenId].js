import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

import BackButton from '../../components/buttons/BackButton'
import TokenForm from '../../components/sections/TokenForm';
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
      <TokenForm
      initialValues={tokenToEdit}
      indexOfToken={tokenId}
      isEditForm={true}
      />
    </div>
  )
}

export default tokenId
