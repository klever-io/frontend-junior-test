import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router'

import AddTokenButton from './AddTokenButton';

import kleverLogo from '../public/assets/logo.svg'
import shootingStar from '../public/assets/shooting-star.svg'
import Link from 'next/link';

function Header() {
  const router = useRouter();
  return (
    <>
      <div className='flex-col items-center justify-center'>
        {/* Klever's Logo */}
        <Link href='/' className='flex items-center justify-center p-5 mt-10'>
          <Image src={kleverLogo} alt="Klever's logo" className='w-60'/>
        </Link>

        {/* Image, Text and Button */}
        <div className='flex justify-center items-center p-2'>
          <div className='flex justify-between items-center p-2 w-80 sm:w-3/4 max-w-2xl'>
          <div className='flex justify-start items-center p-2 w-96'>
            {/* Image and Text */}
            <div className='flex justify-center items-center p-2'>
              {/* Image */}
              <div>
                <Image src={shootingStar} alt="Shooting star" className='w-10 sm:w-14'/>
              </div>
              {/* Text */}
              <div className='ml-2'>
                <p className='text-2xl sm:text-4xl font-medium text-white'>Wish Wallet</p>
              </div>
            </div>
          </div>

          {/* Add Button */}
          <div className='flex justify-end sm:ml-20'>
            { router.pathname === '/' && <AddTokenButton/>}
          </div>
        </div> 
        </div>
      </div>
    </>
  );
}

export default Header