import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Test the Home page', () => {
  it('test if the elements are present', () => {
    renderWithRouter(<App />);
    const kleverLogo = screen.getByRole('img', { name: /klever logo/i });
    const wishWallet = screen.getByText(/wish wallet/i);
    const addButton = screen.getByRole('button', { name: /add token/i });
    const tokenHeader = screen.getByRole('columnheader', { name: /tokens/i });
    const balanceHeader = screen.getByRole('columnheader', { name: /balance/i });
    expect(kleverLogo).toBeInTheDocument();
    expect(wishWallet).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(tokenHeader).toBeInTheDocument()
    expect(balanceHeader).toBeInTheDocument()
  });

  it('test if clicking on the add button redirects the user to add-token page', () => {
   renderWithRouter(<App />);
    const addButton = screen.getByRole('button', { name: /add token/i });
    userEvent.click(addButton);
    expect(window.location.pathname).toBe('/add-token');
    expect(screen.getByRole('textbox', { name: /token/i })).toBeInTheDocument();
  })
})
