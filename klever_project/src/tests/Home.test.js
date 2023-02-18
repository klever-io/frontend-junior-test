import App from "../App";
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from "../helper/renderWithRouter";

describe('Teste referente a página de Home', () => {
  const { history } = renderWithRouter(
    <App />
  );
  it('Renderiza uma tabela com token e balance e clica no botão add', () => {
    const title = screen.getByRole('heading', { name: /wish wallet/i })

    expect(title).toBeInTheDocument()

    expect(screen.getByRole('columnheader', { name: /token/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /balance/i })).toBeInTheDocument();

    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(1);

    const addButton = screen.getByRole('button', { name: /add token/i })
    expect(addButton).toBeInTheDocument()
    
    userEvent.click(addButton);

    const path = history.location.pathname;
    expect(path).toBe('/AddToken');
  });
});
