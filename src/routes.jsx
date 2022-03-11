import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddToken from './pages/Add';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddToken />} />
            </Routes>
        </>
    );
};

export default Router;
