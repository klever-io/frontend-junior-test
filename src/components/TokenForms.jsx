import React from 'react'
import Star from '../assets/shooting-star.svg'

function TokenForms() {
  return (
    <div className='TokenFormsTop'>
      <img src={ Star } alt="" width="45px"/>
      <h2 >Wish Wallet</h2>
      <button>Add Token</button>
    </div>
  )
}

export default TokenForms