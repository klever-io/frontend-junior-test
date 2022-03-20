import React from 'react';
import { Container, Table, Img } from './styles';
import editIcon from '../../images/edit-btn.png'
import { getToken } from '../../Utils/saveToken';

function TableWallet() {
  const wallet = getToken('wallet') || [];

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Tokens</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {
            wallet.map(({ token, balance }, i) => (
                <tr key={ i }>
                  <td>
                    <button>
                      <Img src={editIcon} alt='editIcon'/>
                    </button>
                  </td>
                  <td>{ token }</td>
                  <td>{ balance }</td>
                </tr>
            ))
          }
          </tbody>
      </Table>
    </Container>
  );
}

export default TableWallet;

// reference: https://www.homehost.com.br/blog/criar-sites/tabela-html/
// https://www.kissclipart.com/article-icon-edit-icon-note-icon-8dlzn0/
