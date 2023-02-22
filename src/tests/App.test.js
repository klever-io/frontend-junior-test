import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const mockTokensValue = [{ token: 'KLV', balance: '123456' }];

describe('Test the Home page', () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

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
    expect(tokenHeader).toBeInTheDocument();
    expect(balanceHeader).toBeInTheDocument();
  });

  it('test if localStorage is called', () => {
    renderWithRouter(<App />);
    expect(window.localStorage.getItem).toHaveBeenCalled();
    expect(window.localStorage.getItem).toHaveBeenCalledWith('tokenList');
  })

  it('test if clicking on the add button redirects the user to add-token page', () => {
   renderWithRouter(<App />);
    const addButton = screen.getByRole('button', { name: /add token/i });
    userEvent.click(addButton);
    expect(window.location.pathname).toBe('/add-token');
    expect(screen.getByRole('textbox', { name: /token/i })).toBeInTheDocument();
  });
});

describe('Test the Add Token Page', () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  it('test if add token form elements are present', () => {
    renderWithRouter(<App />, {route: '/add-token'});
    const saveButton = screen.getByRole('button', { name: /save/i });
    const tokenInput = screen.getByRole('textbox', { name: /token/i });
    const balanceInput = screen.getByRole('textbox', { name: /balance/i });
     expect(tokenInput).toBeInTheDocument();
     expect(balanceInput).toBeInTheDocument();
     expect(tokenInput).toHaveValue('');
     expect(balanceInput).toHaveValue('');
     expect(saveButton).toBeInTheDocument();
     expect(saveButton).toBeDisabled();
   });

   it('test if token is added to localStorage', () => {
    renderWithRouter(<App />, {route: '/add-token'});
    const saveButton = screen.getByRole('button', { name: /save/i });
    const tokenInput = screen.getByRole('textbox', { name: /token/i });
    const balanceInput = screen.getByRole('textbox', { name: /balance/i });
    userEvent.type(tokenInput, mockTokensValue[0].token);
    userEvent.type(balanceInput, mockTokensValue[0].balance);
    expect(saveButton).toBeEnabled();
    userEvent.click(saveButton);
    expect(window.localStorage.setItem).toHaveBeenCalled();
    expect(window.localStorage.setItem).toHaveBeenCalledWith('tokenList', JSON.stringify(mockTokensValue));
    expect(window.location.pathname).toBe('/');
   })
})
