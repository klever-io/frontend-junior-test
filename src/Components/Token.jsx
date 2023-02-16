import React from 'react'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import '../CSS/token.css'

function Token({ token, balance }) {
  const navigate = useNavigate();
  return (
    <div className="token-component-container">
      <div className='name-and-edit-container'>
        <button
          id="edit-icon-button"
          type="button"
          onClick={ () => navigate('/edit-token') }
        >
          <FontAwesomeIcon id="search-icon" icon={ faPenToSquare } />
        </button>
        <span id="token-name">{ token }</span>
      </div>
      <span id="balance-value">{ balance }</span>
    </div>
  )
}

export default Token;
