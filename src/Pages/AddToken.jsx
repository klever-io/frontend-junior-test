import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'

function AddToken() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div>
        <span>Add Token</span>
        <button
          type="button"
          onClick={ () => navigate('/') }
        >
          Back
        </button>
        <form>
          <label htmlFor="token">
            Token
            <input
              type="text"
              name="token"
              id="token" 
            />
          </label>
          <label htmlFor="balance">
            Balance
            <input
              type="number"
              name="balance"
              id="balance" 
            />
          </label>
        </form>
        <button
          type="button"
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default AddToken