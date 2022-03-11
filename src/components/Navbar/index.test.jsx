import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '.';

describe('Navbar Container test', () => {
    it('should render brand this screen', () => {
        const { getByAltText } = render(<Navbar />);

        expect(getByAltText('brand')).toBeInTheDocument();
    });
});
