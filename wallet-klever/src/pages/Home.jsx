import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useHistory } from 'react-router-dom';


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
      <Header />
      <button onClick={ AddTokenClick }>Add Token</button>
        <div>
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
                        <td><button onClick={() => EditTokenClick(token.id)}>Edit Token</button></td>
                        <td>{token.token}</td>
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