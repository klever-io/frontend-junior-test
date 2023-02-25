import React, {useState, useEffect} from 'react';
import ShootingStar from '../assets/shooting-star1.svg';
import Logo from '../assets/logo.svg';
import { useHistory, useParams } from 'react-router-dom';
import 'bulma/css/bulma.css';

 function EditToken() {
  const history = useHistory();
  const { id } = useParams();
  // console.log(id);

  const [token, setToken] = useState({token: '', balance: ''});

  useEffect(() => {
    const storedTokens = localStorage.getItem('tokens') || '[]';
    const tokens = JSON.parse(storedTokens);
    // console.log(tokens);
    const currentToken = tokens.find(token => token.id === id);
    // console.log(currentToken);
    if(currentToken) {
      setToken(currentToken);
    }
  }, [id]);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setToken(prevState => ({
      ...prevState,
      [name]: value,
  }))
  };

  // if (!initialId) {
  //   return <div>Invalid token ID.</div>;
  // }

  const handleSave = () => {
    const storedTokens = localStorage.getItem('tokens') || '[]';
    const tokens = JSON.parse(storedTokens);
    const updatedTokens = tokens.map((originalToken) => {
      if (originalToken.id === id) {
          return token;
      }
      return originalToken;
    })
    localStorage.setItem('tokens', JSON.stringify(updatedTokens));
    history.push('/');
  };

  const handleRemove = () => {
    const storedTokens = localStorage.getItem('tokens') || '[]';
    const tokens = JSON.parse(storedTokens);
    const updatedTokens = tokens.filter(originalToken => originalToken.id !== id);
    localStorage.setItem('tokens', JSON.stringify(updatedTokens));
    history.push('/');
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
      <h1 className='h1-add-token'>Edit Token</h1>
      <button 
        className='button is-small back-color'
        onClick={() => history.push('/')}>
          Back
      </button>
      </div>
      <form>
        <div className='field'>
          <label className='label' htmlFor='token'>Token</label>
            <div className='control'>
              <input
                className='input is-normal'
                type='text'
                id='token'
                name='token'
                value={token.token}
                onChange={ handleInputChange }
              />
            </div>
          </div>
          <div className='field'>
        <label className='label' htmlFor='balance'>Balance</label>
          <input
            className='input'
            type='number'
            id='balance'
            name='balance'
            value={token.balance}
            onChange={ handleInputChange }
          />
        </div>
      </form>
      <div className='buttons'>
        <button 
          className='button is-small remove-color'
          onClick={handleRemove}
        >
          Remove
        </button>
        <button 
          className='button is-small save2-color'
          onClick={ handleSave }
        >
          Save
        </button>
      </div>
    </div>
    </>
  )
}
export default EditToken;