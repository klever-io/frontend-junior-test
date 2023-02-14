import { createBrowserHistory } from '@remix-run/router';
import React from 'react'
import KleverLogo from '../assets/logo.svg'
import Star from '../assets/shooting-star.svg'

function Header() {
  const history = createBrowserHistory();
  const locate = history.location.pathname;
  return (
    <header>
        <div>
          <img src={ KleverLogo } alt="logo Klever" />
          <span>Klever</span>
        </div>
        <div>
          <img src={ Star } alt="shooting star" />
          <span>Wish Wallet</span>
          { locate === "/" && 
              <button 
              type="button"
            >
              Add Token
            </button> 
          }
        </div>
    </header>
  )
}

export default Header