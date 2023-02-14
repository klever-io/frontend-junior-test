import React from 'react';
import { FiEdit } from 'react-icons/fi';

function Tokens () {
  return (
    <table>
      <thead>
        <th></th>
        <th>Tokens</th>
        <th>Balance</th>
      </thead>
      <tbody>
        <tr>
          <td><FiEdit className="edit-icon"/></td>
          <td>KVL</td>
          <td>10,250.50</td>
        </tr>
        <tr>
          <td><FiEdit className="edit-icon"/></td>
          <td>DVK</td>
          <td>50,250.71</td>
        </tr>
        <tr>
          <td><FiEdit className="edit-icon"/></td>
          <td>KFI</td>
          <td>10</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Tokens;