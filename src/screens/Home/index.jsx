import React from 'react';
import Button from '../../components/Button';
import Wallet from '../../components/Wallet';

import './style.css';
const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="home-content-wrapper">
                    <div className="home-content">
                        <Wallet />
                        <Button primary={true} pathTo={'/add'}>
                            Add Token
                        </Button>
                    </div>
                </div>
            </div>
            ;
        </>
    );
};

export default Home;
