import React, { useState, useEffect } from 'react';
import ShootingStar from '../assets/shooting-star1.svg';
import Logo from '../assets/logo.svg';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import 'bulma/css/bulma.css';

 function Home() {

  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    const storedTokens = localStorage.getItem('tokens') || '[]';
      setTokens(JSON.parse(storedTokens));
  }, []);

  const history = useHistory();

  const AddTokenClick = () => {
    history.push('/addToken');
  }

  const EditTokenClick = (id) => {
    history.push(`/editToken/${id}`);
  }

  return (
    <div>
      <div className='center'>
        <img className='image custom-size' src={ Logo } alt='Logo Klever' />
      </div>
      <div className='container'>
        <img className='image is-48x48' src={ ShootingStar } alt='Shooting-star' />
        <h1 className='h1-header'>Wish Wallet</h1>
        <button className='button is-small is-responsive add-color' onClick={ AddTokenClick }>Add Token</button>
      </div>
        <div className='container-table'>
          <table>
              <thead>
                <tr>
                  <th>Tokens</th>
                  <th>Balance</th>
                </tr>
            </thead>
            <tbody>
              {tokens.map((token) => (
                <tr key={ token.id }>
                    <td>
                      <div>
                        <button className='edit-color' onClick={() => EditTokenClick(token.id)}>
                          <div className='icon'><FontAwesomeIcon icon={faPenToSquare}/></div>
                        </button>
                        { token.token }
                      </div>
                    </td>
                    <td>{ token.balance }</td>
                </tr>

              ) )
              }    
            </tbody>
          </table>
        </div>
    </div>
  )
}
export default Home;