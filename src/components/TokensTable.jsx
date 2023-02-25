import React from 'react';
import './TokenTable.css';
import editIcon from '../assets/editIcon.svg';

function TokensTable() {
  return (
    <table className="tokensTable">
      <thead className="tokensHeader">
        <tr>
          <th />
          <th><h5>Tokens</h5></th>
          <th><h5>Balance</h5></th>
        </tr>
      </thead>
      <tbody className="tokenBody">
        <tr className="tokenRow">
          <td>
            <button type="button" className="editButton">
              <img src={editIcon} alt="" width="45px" />
            </button>
          </td>
          <td>
            <span>Token</span>
          </td>
          <td>
            <span>Value</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TokensTable;
