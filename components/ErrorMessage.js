import Image from 'next/image'
import React from 'react'
import mapError from '../utils/mapError'

import warning from '../public/assets/warning.svg'

export default function ErrorMessage({ error }) {
  return (
    error && (
      <div className='flex justify-start items-center my-2'>
        <Image src={warning} alt='warning message icon'/>
        <div className='text-white ml-1'>{mapError(error)}</div>
      </div>
    )
  )
}
