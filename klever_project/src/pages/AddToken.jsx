import React from 'react'
import { Link } from 'react-router-dom';

export default function AddToken() {
  return (
    <div>
      <h1> Wish Wallet</h1>
      <div>
        <h2>Add Token</h2>
        <Link to="">
        <button
        type='button'
        >
        Voltar 
        </button>
        </Link>
      </div>
    <div>
      Token
      <input type="text" />
    </div>

    <div>
    Balance
      <input type="number" />
    </div>
    <div>
      <button type="button" >
        Salvar
      </button>
    </div>
  </div>
  )
}
