import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

const renderWithRouter = (component, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)
  return ({
    ...render(component, { wrapper: BrowserRouter})
  });
};

export default renderWithRouter;