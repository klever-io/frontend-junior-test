import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import { useHistory, useParams } from 'react-router-dom';

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
      <Header />
      <h1>Edit Token</h1>
      <button onClick={() => history.push('/')}>Back</button>
      <form>
        <label htmlFor='token'>
          Token
          <input
            type='text'
            id='token'
            name='token'
            value={token.token}
            onChange={ handleInputChange }
            />
        </label>
        <label htmlFor='balance'>
          Balance
          <input
            type='number'
            id='balance'
            name='balance'
            value={token.balance}
            onChange={ handleInputChange }
          />
        </label>
      </form>
      <button onClick={handleSave}>Save</button>
      <button onClick={ handleRemove }>Remove</button>
    </div>
    </>
  )
}
export default EditToken;