import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


 function AddToken() {

  const history = useHistory();
  const [tokens, setTokens] = useState([]);
  const [newToken, setNewToken] = useState({ token: '', balance: ''});

  useEffect(() => {
    const storedTokens = localStorage.getItem('tokens') || '[]';
    if (storedTokens) {
      setTokens(JSON.parse(storedTokens))
    }
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setNewToken(prevState => ({
      ...prevState,
      [name]: value,
    }))
  };

  const handleSave = (event) => {
    event.preventDefault();
    if (newToken.token.length === 0 || newToken.balance.length === 0) {
      alert('The inputs Token and Balance cannot be empty');
    }else {
      const isTokenExists = tokens.some(token => token.token === newToken.token);

      if (isTokenExists) {
        alert(`Token ${newToken.token} already exists!`);
    }else {
    const updateToken = {...newToken, id: uuidv4()}  
    const updatedTokens = [...tokens, updateToken ]
      // console.log(updatedTokens);
      setTokens(updatedTokens)
        localStorage.setItem('tokens', JSON.stringify(updatedTokens));
        // console.log(updatedTokens);
        history.push('/');
      };
    };
  };
  

  return (
    <>
    <div>
      <Header />
      <div>
        <h1>Add Token</h1>
        <button onClick={() => history.push('/')}>Back</button>
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
      <button onClick={ handleSave } >
        Save
      </button>
    </div>
    </>
  )
}
export default AddToken;