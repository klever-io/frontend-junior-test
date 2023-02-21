import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';


 function Home() {

  const navigate = useNavigate();

  const AddTokenClick = () => {
    navigate('/addToken');
  }

  return (
    <div>
      <Header />
      <button onClick={ AddTokenClick }>Add Token</button>
    </div>
  )
}
export default Home;