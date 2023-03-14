import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { setLocalStorage, updateLocalStorage, deleteLocalStorage } from '../../utils/localStorage';

export default function TokenForm({ isEditForm = false, initialValues = {} }) {
  const [token, setToken] = useState(initialValues.token || '');
  const [balance, setBalance] = useState(initialValues.balance || '');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = { token, balance };
    if (isEditForm) {
      updateLocalStorage(values, initialValues.index);
    } else {
      setLocalStorage(values);
    }
    router.push('/');
  };

  const handleRemoveToken = (event) => {
    event.preventDefault();
    deleteLocalStorage(initialValues.index);
    router.push('/');
  };

  const handleTokenChange = ({ target }) => {
    const { value } = target;
    const formattedValue = value.toUpperCase();
    setToken(formattedValue);
  };

  const handleBalanceChange = ({ target }) => {
    const { value } = target;
    setBalance(value);
  };

  const submitButtonText = isEditForm ? 'Salvar' : 'Add';

  return (
    <div className='flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='w-auto sm:w-full max-w-lg mt-6'>
        <div className='flex flex-col items-center'>
          {/* Token Input */}
          <div className='w-full mb-3'>
            <label htmlFor='token' className='text-white font-bold mb-2'>
              Token
            </label>
            <input
              id='token'
              type='text'
              placeholder='KLV'
              maxLength='3'
              value={token}
              onChange={handleTokenChange}
              className='appearance-none block w-full bg-white border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500'
            />
          </div>
        {/* Balance Input */}
        <div className='w-full mb-6'>
          <label htmlFor='balance' className='text-white font-bold mb-2'>
            Balance
          </label>
          <input
            id='balance'
            type='text'
            placeholder='1000'
            value={balance}
            onChange={handleBalanceChange}
            className='appearance-none block w-full bg-white border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500'
          />
        </div>
        {/* Submit Button */}
        <div className={`w-full flex ${isEditForm ? 'justify-between' : 'justify-end'}`}>
          {isEditForm && (
          <button
            type='submit'
            onClick={handleRemoveToken}
            className='bg-klever-remove-button hover:brightness-90 text-white font-semibold p-2 sm:px-8 rounded focus:outline-none focus:shadow-outline'
          >
            Remove
          </button>
          )}

          <button
            type='submit'
            onClick={handleSubmit}
            className='bg-klever-enabled-button hover:bg-klever-enabled-hover-button text-white font-semibold p-2 sm:px-8 rounded disabled:bg-klever-disabled-button focus:outline-none focus:shadow-outline'
            disabled={!token || !balance}
          >
            {submitButtonText}
          </button>
        </div>
      </div>
    </form>
  </div>
  )}
