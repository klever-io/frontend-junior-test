
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { setLocalStorage, updateLocalStorage, deleteLocalStorage, getLocalStorage } from '../../utils/localStorage';
import ErrorMessage from '../ErrorMessage';

export default function TokenForm({ isEditForm = false }) {
  const [token, setToken] = useState('');
  const [balance, setBalance] = useState('');
  const [tokenErrorMessage, setTokenErrorMessage] = useState('');
  const [balanceErrorMessage, setBalanceErrorMessage] = useState('');

  const router = useRouter();
  const tokenId = router.query.tokenId

  useEffect(() => {
    restoreToken()
  }, [])

  const restoreToken = () => {
    const tokensFromLocalStorage = getLocalStorage();
    if (tokensFromLocalStorage && tokensFromLocalStorage[tokenId]) {
      const restoredToken = tokensFromLocalStorage[tokenId];
      setToken(restoredToken.token);
      setBalance(restoredToken.balance);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const values = { token, balance };

    if (isEditForm) {
      updateLocalStorage(values, tokenId);
    } else {
      setLocalStorage(values);
    }
    router.push('/');
  };

  const handleRemoveToken = (event) => {
    event.preventDefault();
    deleteLocalStorage(tokenId);
    router.push('/');
  };

  const handleTokenChange = ({ target }) => {
    const { value } = target;
    const formattedValue = value.toUpperCase();
    setToken(formattedValue);
    handleTokenErrors(formattedValue);
  };

  const handleBalanceChange = ({ target }) => {
    const { value } = target;
    setBalance(value);
    handleBalanceErrors(value);
  };

  const handleTokenErrors = (value) => {
    const allTokens = getLocalStorage();
    const regexPattern = /^[a-zA-Z]+$/;
    const isSameToken = allTokens.some((token) => token.token === value);

    if (!allTokens) {
      return;
    }

    if (!regexPattern.test(value)) {
      return setTokenErrorMessage('TOKEN_IS_NOT_A_STRING');
    } else if (value.length < 3) {
      return setTokenErrorMessage('TOKEN_MUST_HAVE_THREE');
    } else if (value.length < 1) {
      return setTokenErrorMessage('TOKEN_IS_REQUIRED');
    } else if (isSameToken) {
      return setTokenErrorMessage('TOKEN_ALREADY_EXISTS');
    } else {
      setTokenErrorMessage('');
    }
  };

  const handleBalanceErrors = (value) => {
    const regexPattern = /^\d+$/;
    if (value.length < 1) {
      return setBalanceErrorMessage('BALANCE_IS_REQUIRED');
    } else if (!regexPattern.test(value)) {
      return setBalanceErrorMessage('BALANCE_IS_NOT_A_NUMBER');
    } else {
      setBalanceErrorMessage('');
    }
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
              onBlur={ () => handleTokenErrors(token)}
              className='appearance-none block w-full bg-white border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500'
            />
          <ErrorMessage error={tokenErrorMessage} />
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
            onBlur={ () => handleBalanceErrors(balance)}
            className='appearance-none block w-full bg-white border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500'
          />
          <ErrorMessage error={balanceErrorMessage} />
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
            disabled={!((token && balance) && (!tokenErrorMessage && !balanceErrorMessage))}
          >
            {submitButtonText}
          </button>
        </div>
      </div>
    </form>
  </div>
  )}
