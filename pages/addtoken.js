import { useState } from 'react';
import { useRouter } from 'next/router'

import { setLocalStorage } from '../utils/localStorage';
import BackButton from '../components/BackButton';

export default function Home() {
  const [token, setToken] = useState('');
  const [balance, setBalance] = useState('');

  const router = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault();
    setLocalStorage(token, balance)
    router.push('/')
  };

  return (
    <div>
      <BackButton/>
      <div className='flex justify-center items-center '>
        <div className='flex justify-center items-center md:w-4/12 2xl:w-1/4 max-w-2xl md:mr-10'>
          <div className='flex justify-center items-center text-lg sm:ml-0 2xl:ml-24 '>
            {/* Inputs */}
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col text-white font-bold mt-6'>
                <div className='flex flex-col'>
                  {/* Token Input */}
                  <label htmlFor='token'>Token</label>
                  <input
                    id='token'
                    type='text'
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    className='bg-white rounded py-1 px-2 sm:px-3 md:px-20 2xl:px-28 border-2 focus:outline-none focus:border-transparent'
                  />
                </div>
                <div className='flex flex-col mt-3'>
                  {/* Balance Input */}
                  <label htmlFor='balance'>Balance</label>
                  <input
                    id='balance'
                    type='text'
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                    className='bg-white rounded py-1 px-2 sm:px-3 md:px-20 2xl:px-28 border-2 focus:outline-none focus:border-transparent'
                  />
                </div>
              </div>
              {/* Submit Button */}
              <div className='flex justify-end items-center'>
                <button type='submit' className='flex justify-center items-center text-white p-1 sm:px-8 rounded font-semibold mt-6 bg-klever-enabled-button hover:bg-klever-enabled-hover-button disabled:bg-klever-disabled-button ' disabled={false}>Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
