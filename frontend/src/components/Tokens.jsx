import React from 'react';
import { FiEdit } from 'react-icons/fi';

function Tokens () {
  return (
    <table border="1">
      <thead>
        <th></th>
        <th>Tokens</th>
        <th>Balance</th>
      </thead>
      <tbody>
        <tr>
          <td><FiEdit className="edit-icon"/></td>
          <td>KVL</td>
          <td>100</td>
        </tr>
        <tr>
          <td><FiEdit className="edit-icon"/></td>
          <td>KVL</td>
          <td>100</td>
        </tr>
        <tr>
          <td><FiEdit className="edit-icon"/></td>
          <td>KVL</td>
          <td>100</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Tokens;