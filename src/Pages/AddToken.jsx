import React from 'react'
import Header from '../Components/Header'

function AddToken() {
  return (
    <div>
      <Header />
      <div>
        <span>Add Token</span>
        <button
          type="button"
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