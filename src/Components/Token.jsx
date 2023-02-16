import React from 'react'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function Token({ token, balance }) {
  const navigate = useNavigate();
  return (
    <div>
      <button
        type="button"
        onClick={ () => navigate('/edit-token') }
      >
        <FontAwesomeIcon id="search-icon" icon={ faPenToSquare } />
      </button>
      <span>{ token }</span>
      <span>{ balance }</span>
    </div>
  )
}

export default Token;
