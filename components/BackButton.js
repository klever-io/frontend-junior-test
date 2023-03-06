import React from 'react'
import { useRouter } from 'next/router'

{/* Ask the interviewer about this button being
in English in the proposed design */}

export default function BackButton() {
  const router = useRouter();

  const goToPreviousPage = () => {
    router.push('/')
  }

  return (
    <div className='flex justify-center items-center text-white font-semibold'>
        <div className='flex justify-between items-center w-80 md:w-4/12 2xl:w-1/4 max-w-2xl md:mr-10'>
          <span className='text-2xl ml-6 sm:ml-0 2xl:ml-24'>
          {
          router.pathname === '/addtoken' ?
          'Add Token' :
          'Edit Token'
          }
          </span>
          <button
          onClick={goToPreviousPage}
          className='p-2 sm:px-8 2xl:mr-6 rounded-md
          bg-klever-back-button'>
            Voltar
          </button>
        </div>
    </div> 
  );
}
