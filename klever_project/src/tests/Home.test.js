import App from "../App";
import { screen } from '@testing-library/react';
import renderWithRouter from "../helper/renderWithRouter";

describe('Teste referente a página de Home', () => {
  renderWithRouter(
    <App />
  );
  it('Renderiza uma tabela com token e balance', () => {
    const title = screen.getByRole('heading', { name: /wish wallet/i })

    const addButton = screen.getByRole('button', { name: /add token/i })

    expect(title).toBeInTheDocument()
    expect(addButton).toBeInTheDocument()

    expect(screen.getByRole('columnheader', { name: /token/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /balance/i })).toBeInTheDocument();

    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(1);
  });
});
