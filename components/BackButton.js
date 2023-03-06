import React from 'react'
import { useRouter } from 'next/router'

{/* Ask the interviewer about this button being
in English in the proposed design */}

export default function BackButton() {
  const router = useRouter();

  const goToPreviousPage = () => {
    router.back()
  }

  return (
    <button
    onClick={goToPreviousPage}
    className='p-2 sm:p-3 sm:px-5 rounded-md font-semibold
    text-white bg-klever-back-button'>
      Voltar
    </button>
  );
}
