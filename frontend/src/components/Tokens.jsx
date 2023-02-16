/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';

function Tokens() {
  return (
    <table>
      <thead>
        <th />
        <th>Tokens</th>
        <th>Balance</th>
      </thead>
      <tbody>
        <tr>
          <Link to="/edit-token">
            <td>
              <FiEdit
                className="edit-icon"
              />
            </td>
          </Link>
          <td>KVL</td>
          <td>10,250.50</td>
        </tr>
        <tr>
          <td><FiEdit className="edit-icon" /></td>
          <td>DVK</td>
          <td>50,250.71</td>
        </tr>
        <tr>
          <td><FiEdit className="edit-icon" /></td>
          <td>KFI</td>
          <td>10</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Tokens;
