import React from 'react';
import Button from '../../components/Button';
import Wallet from '../../components/Wallet';
import useGetLocalStorage from '../../hooks/useGetDatasLocalStorage';
import { BiEdit } from 'react-icons/bi';
import './style.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [tokens] = useGetLocalStorage();
    const navigate = useNavigate();
    console.log(tokens);
    return (
        <div className="home-container">
            <div className="home-content-wrapper">
                <div className="home-wallet-wrapper">
                    <Wallet />
                    <Button primary={true} pathTo={'/add'}>
                        Add Token
                    </Button>
                </div>
            </div>
            <div className="home-content">
                <div className="home-content-tokens">
                    <div className="content-title">
                        <p>Tokens</p>
                        <p>Balance</p>
                    </div>
                    {tokens &&
                        tokens.map((val, i) => {
                            return (
                                <div key={i} className="content">
                                    <BiEdit
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            navigate('/edit', {
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
