import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';


 function AddToken() {

  const navigate = useNavigate();
  // const [tokens, newTokens] = useState([]);
  const [newToken, setNewToken] = useState({ token: '', balance: ''});
  // const [isDisabled, setIsDisabled] = useState(true);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setNewToken(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }


  return (
    <>
    <div>
      <Header />
      <div>
        <h1>Add Token</h1>
        <button onClick={() => navigate('/')}>Back</button>
      </div>
      <form>
        <label htmlFor='token'>
          Token    
          <input 
            type='text'
            name='token'
            id='token'
            value={newToken.token}
            onChange={ handleInputChange }
            />  
        </label>
        <label htmlFor='balance'>
          Balance    
          <input 
            type='number'
            name='balance'
            id='balance'
            value={newToken.balance}
            onChange={ handleInputChange }
            />  
        </label>
      </form>
      <button>
        Save
      </button>
    </div>
    </>
  )
}
export default AddToken;