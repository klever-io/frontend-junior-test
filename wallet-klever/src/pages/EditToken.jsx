import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

 function EditToken() {
  const navigate = useNavigate();

  return (
    <>
    <div>
      <Header />
      <h1>Edit Token</h1>
      <button onClick={() => navigate('/')}>Back</button>
      <form>
        <label htmlFor='token'>
          Token
          <input
            type='text'
            id='token'
            name='token'
            // value={token.token}
            // onChange=
            />
        </label>
        <label htmlFor='balance'>
          Balance
          <input
            type='number'
            id='balance'
            name='balance'
            // value={token.balance}
            // onChange=
          />
        </label>
      </form>
    </div>
    </>
  )
}
export default EditToken;