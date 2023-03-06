import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/router';

import { setLocalStorage } from '../../utils/localStorage';

export default function AddTokenForm() {
  const [token, setToken] = useState('');
  const [balance, setBalance] = useState('');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLocalStorage(token, balance);
    router.push('/');
  };

  return (
    <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit} className="w-auto sm:w-full max-w-lg mt-6">
          <div className="flex flex-col items-center">
            {/* Token Input */}
            <div className="w-full mb-3">
              <label htmlFor="token" className="text-white font-bold mb-2">
                Token
              </label>
              <input
                id="token"
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="appearance-none block w-full bg-white border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* Balance Input */}
            <div className="w-full mb-6">
              <label htmlFor="balance" className="text-white font-bold mb-2">
                Balance
              </label>
              <input
                id="balance"
                type="text"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                className="appearance-none block w-full bg-white border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* Submit Button */}
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="bg-klever-enabled-button hover:bg-klever-enabled-hover-button text-white font-semibold p-2 sm:px-8 rounded disabled:bg-klever-disabled-button focus:outline-none focus:shadow-outline"
                disabled={!token || !balance}
              >
                Salvar
              </button>
            </div>
          </div>
        </form>
      </div>
  )
}
