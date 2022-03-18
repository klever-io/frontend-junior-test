import React from 'react';
import { Container, Table } from './styles';

function TableWallet() {

  const walletMock = [
    { token: "KLV", value: "23,233.43" },
    { token: "DVK", value: "28,260.42" },
    { token: "KFI", value: "10" }
  ]

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
            walletMock.map(({ token, value }, i) => (
                <tr key={ i }>
                  <td>
                    <button>edit</button>
                  </td>
                  <td>{ token }</td>
                  <td>{ value }</td>
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