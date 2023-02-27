import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TokenTable.css';
import editIcon from '../assets/editIcon.svg';
import AssestsContext from '../context/AssetsContext';

function TokensTable() {
  const navigate = useNavigate();
  const [tableAssets, setTableAssets] = useState([]);
  const storedAssets = JSON.parse(localStorage.getItem('assets'));

  const { setForm, assets } = useContext(AssestsContext);

  useEffect(() => {
    setTableAssets(storedAssets);
  }, [assets.length]);

  const handleEdit = (tok, bal) => {
    setForm({ token: tok, balance: bal });
    navigate('/edit');
  };

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
        {tableAssets && tableAssets.map(({ token, balance }) => (
          <tr className="tokenRow" key={token}>
            <td>
              <button
                type="button"
                className="editButton"
                onClick={() => handleEdit(token, balance)}
              >
                <img src={editIcon} alt="" width="30px" />
              </button>
            </td>
            <td>
              <span>{token.toUpperCase()}</span>
            </td>
            <td>
              <span>{balance}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TokensTable;
