import React from 'react'
import { useRouter } from 'next/router'

export default function AddTokenButton() {
  const router = useRouter();

  const goToAddTokenPage = () => {
    router.push('/addtoken')
  }

  return (
    <button
    onClick={goToAddTokenPage}
    className='p-2 sm:px-5 rounded-md font-semibold
    text-white bg-klever-enabled-button hover:opacity-80'>
      Add Token
    </button>
  );
}
