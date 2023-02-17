import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

  return (
    <div>
      <div>
        <h1> Wish Wallet</h1>
        <Link to="/AddToken">
        <button
        type='button'
        >
          Add Token 
        </button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th> Token </th>
            <th> Balance </th>
          </tr>
        </thead>

        <tbody>
            <tr>
            <td>token</td>
            <td>balance</td>
            <td>
              <Link to={ `/EditToken` }>
              edit
              </Link>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}
