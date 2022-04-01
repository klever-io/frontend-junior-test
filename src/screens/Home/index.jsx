import React from 'react';
import { BiEdit } from 'react-icons/bi';
import Button from '../../components/Button';
import Wallet from '../../components/Wallet';
import useGetLocalStorage from '../../hooks/useGetDatasLocalStorage';
import Navbar from '../../components/Navbar';

import './style.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [tokens] = useGetLocalStorage();
    const navigate = useNavigate();
    const handleNavigationForAddRoute = () => navigate('/add');

    return (
        <div className="home-container">
            <Navbar />
            <div className="home-content-wrapper">
                <div className="home-wallet-wrapper">
                    <Wallet />
                    <Button style="primary" onClick={handleNavigationForAddRoute}>
                        Add Token
                    </Button>
                </div>
            </div>
            <div className="home-content">
                <div className="home-content-tokens">
                    {tokens?.length > 0 && (
                        <div className="content-title">
                            <p>Tokens</p>
                            <p>Balance</p>
                        </div>
                    )}

                    {tokens &&
                        tokens.map((val, i) => {
                            return (
                                <div key={i} className="content">
                                    <BiEdit
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            navigate(`/edit/${val.name}`, {
                                                state: {
                                                    name: val.name,
                                                    balance: val.balance,
                                                },
                                            });
                                        }}
                                    />
                                    <p>{val.name.toUpperCase()}</p>
                                    <p>{val.balance}</p>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Home;
