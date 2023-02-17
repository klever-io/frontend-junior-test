import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';
import kleverLogo from '../assets/images/logo.svg';
import shootingStar from '../assets/images/shooting-star.svg'
import '../assets/css/Header.css';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const defineTitleByLocation = () => {
    const tokenPageTitle = {
      '/edit-token': 'Edit Token',
      '/add-token': 'Add Token'
    }
    return tokenPageTitle[location.pathname];
  }

  const defineButtonName = location.pathname === '/' ? 'Add Token' : 'Voltar';

  const goToPage = () => {
    if (location.pathname === '/') {
      navigate('/add-token');
    } else {
      navigate('/')
    }
  }

  return (
    <header>
      <img src={ kleverLogo } alt="Klever logo" className="logo" />
      <div className="shooting-star">
        <img src={ shootingStar} alt="Shooting Star" />
        <p>Wish Wallet</p>
      </div>
      <div className="title-and-button">
        <p className="page-title">{ defineTitleByLocation() }</p>
        <Button name={ defineButtonName } onButtonClick={ () => goToPage() } />
      </div>
    </header>
  );
}

export default Header;