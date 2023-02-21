import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';


 function Home() {

  const navigate = useNavigate();

  const AddTokenClick = () => {
    navigate('/addToken');
  }

  const EditTokenClick = () => {
    navigate(`/editToken`);
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
                <tr>
                    <td>
                        <tr>KLV</tr>
                        <tr>10,250.50</tr>
                        <button onClick={() => EditTokenClick()}>Edit Token</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
    </div>
  )
}
export default Home;