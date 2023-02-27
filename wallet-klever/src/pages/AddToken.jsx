import React, { useState, useEffect } from 'react';
import ShootingStar from '../assets/shooting-star1.svg';
import Logo from '../assets/logo.svg';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import 'bulma/css/bulma.css';


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
      <div className='center'>
        <img className='image custom-size' src={ Logo } alt='Logo Klever' />
      </div>
      <div className='container'>
        <img className='image is-48x48' src={ ShootingStar } alt='Shooting-star' />
        <h1 className='h1-header'>Wish Wallet</h1>
      </div>
       <div className='title'>
        <h1 className='h1-add-token'>Add Token</h1>
        <button 
          className='button is-small back-color' 
          onClick={() => history.push('/')}>
            Back
        </button>
      </div>
      <form>
        <div className='field'>
          <label className='label' htmlFor='token'> Token</label>
            <div className='control'>
              <input 
                className='input is-normal'
                type='text'
                name='token'
                id='token'
                value={newToken.token}
                onChange={ handleInputChange }
              />  
            </div>
        </div>
        <div className='field'>
        <label className='label' htmlFor='balance'>Balance</label> 
          <input 
            className='input'
            type='number' 
            name='balance'
            id='balance'
            value={ newToken.balance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }
            onChange={ handleInputChange }
            />  
        </div>
      </form>
      <div className='button-save'>
        <button 
          className='button is-small is-responsive save-color'
          onClick={ handleSave } 
        >
          Save
        </button>
      </div>
    </div>
    </>
  )
}
export default AddToken;