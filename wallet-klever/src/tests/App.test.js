import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Home from '../pages/Home';

describe('Home page', () => {
  test('renders home page with add token button', () => {
    
    render(<Home />);
    const headerText = screen.getByRole('heading', { name: /wish wallet/i  })
    expect(headerText).toBeInTheDocument();

    const starImage = screen.getByRole('img', { name: /shooting-star/i })
    expect(starImage).toBeInTheDocument();

    const titleColumnToken = screen.getByRole('columnheader', { name: /tokens/i })
    const titleColumnBalance = screen.getByRole('columnheader', { name: /Balance/i })

    expect(titleColumnToken).toBeInTheDocument();
    expect(titleColumnBalance).toBeInTheDocument();
  });
  it('should redirect to addToken page', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Home />
      </Router>
    );
    const addTokenButton = screen.getByRole('button', { name: /add token/i });
    expect(addTokenButton).toBeInTheDocument();
    fireEvent.click(addTokenButton);
    expect(history.location.pathname).toBe('/addToken');
  });
});


