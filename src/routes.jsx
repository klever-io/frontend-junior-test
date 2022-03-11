import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import AddToken from './screens/AddToken';

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
