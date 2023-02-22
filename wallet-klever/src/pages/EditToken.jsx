import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';

 function EditToken() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [token, setToken] = useState({token: '', balance: ''});

  useEffect(() => {
    const storedTokens = localStorage.getItem('token');
    if(storedTokens) {
      const tokens = JSON.parse(storedTokens);
      const currentToken = tokens.find((token) => token.id === id)
      if(currentToken) {
        setToken(currentToken);
      }
    }
   }
  , [id]); 

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setToken(prevState => ({
      ...prevState,
      [name]: value
  }))
  }

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
      <button>Save</button>
      <button>Remove</button>
    </div>
    </>
  )
}
export default EditToken;