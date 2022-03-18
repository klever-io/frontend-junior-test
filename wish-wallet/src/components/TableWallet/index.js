import React from 'react';
import { Container } from './styles';

function TableWallet() {

  const walletMock = [
    { token: "KLV", value: "23,233.43" },
    { token: "DVK", value: "28,260.42" },
    { token: "KFI", value: "10" }
  ]

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Tokens</th>
            <th>Balance</th>
          </tr>
        </thead>
          {
            walletMock.map(({ token, value }, i) => (
              <tbody key={ i }>
                <tr>
                  <td>
                    <button>edit</button>
                  </td>
                  <td>{ token }</td>
                  <td>{ value }</td>
                </tr>
              </tbody>
            ))
          }
      </table>
    </Container>
  );
}

export default TableWallet;

// reference: https://www.homehost.com.br/blog/criar-sites/tabela-html/