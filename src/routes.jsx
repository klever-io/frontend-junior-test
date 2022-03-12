import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import AddToken from './screens/AddToken';
import EditToken from './screens/EditToken';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddToken />} />
                <Route path="/edit" element={<EditToken />} />
            </Routes>
        </>
    );
};

export default Router;
