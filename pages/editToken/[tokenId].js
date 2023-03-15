import React from 'react'

import BackButton from '../../components/buttons/BackButton'
import TokenForm from '../../components/sections/TokenForm';

function tokenId() {
  return (
    <div>
      <BackButton />
      <TokenForm isEditForm={true}/>
    </div>
  )
}

export default tokenId
