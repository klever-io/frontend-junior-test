import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';


 function AddToken() {

  const navigate = useNavigate();
  const [tokens, setTokens] = useState([]);
  const [newToken, setNewToken] = useState({ token: '', balance: ''});

  useEffect(() => {
    const storedTokens = localStorage.getItem('tokens');
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
      alert('The inputs Token and Balance cannot be empty')
  }else {
      const updatedTokens = [...tokens, newToken ]
      // console.log(updatedTokens);
      setTokens(updatedTokens)
        localStorage.setItem('tokens', JSON.stringify(updatedTokens));
        // console.log(updatedTokens);
        navigate('/');
      };
    };
  

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
      <button onClick={ handleSave } >
        Save
      </button>
    </div>
    </>
  )
}
export default AddToken;