import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '.';

describe('Navbar test', () => {
    it('shoud render navbar with brand', () => {
        const { getByAltText } = render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />} />
                </Routes>
            </BrowserRouter>
        );

        const nav = getByAltText('brand');
        expect(nav).toBeInTheDocument();
    });
});
