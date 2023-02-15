import { createBrowserHistory } from '@remix-run/router';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import KleverLogo from '../assets/logo.svg'
import Star from '../assets/shooting-star.svg'
import '../CSS/header.css'

function Header() {
  const history = createBrowserHistory();
  const navigate = useNavigate();
  const locate = history.location.pathname;
  return (
    <header>
        <div className="klever-logo-container">
          <img id="klever-logo" src={ KleverLogo } alt="logo Klever" />
        </div>
        <div className="star-container">
          <div className="star-and-wish-container">
            <img id="shooting-star" src={ Star } alt="shooting star" />
            <span id="wish-span">Wish Wallet</span>
          </div>
          <div>
          { locate === "/" && 
              <button 
              id="add-button"
              type="button"
              onClick={ () => navigate('/add-token') }
            >
              Add Token
            </button> 
          }
          </div>
        </div>
    </header>
  )
}

export default Header