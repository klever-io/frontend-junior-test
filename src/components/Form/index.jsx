import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useHandleFormData from '../../hooks/useHandleFormData';
import useLocalStorage from '../../hooks/useLocalStorage';

import Button from '../Button';

import Modal from '../Modal';

import './style.css';

const Form = ({ tokenName }) => {
    const [, , , findToken] = useLocalStorage();
    const tokenDatas = tokenName && findToken(tokenName);
    console.log(tokenDatas, tokenName);
    const [inputToken, setInputToken] = useState(tokenDatas ? tokenDatas.name.toUpperCase() : '');
    const [inputBalance, setInputBalance] = useState(tokenDatas ? tokenDatas.balance : '');

    const [handleForm, error] = useHandleFormData();
    const [isOpen, toogleIsOpen] = useState(false);
    const location = useLocation();
    const showButton = location.pathname == `/edit/${tokenName}` ? true : false;

    const toogle = (e) => {
        e.preventDefault();
        toogleIsOpen((prev) => !prev);
    };
    return (
        <>
            {error?.length > 0 && (
                <div className="error-container">
                    {error.map((val, i) => {
                        return <p key={i}>{val}</p>;
                    })}
                </div>
            )}
            {isOpen && <Modal toogleIsOpen={toogleIsOpen} tokenName={tokenName} />}

            {tokenName ? (
                <form className="klever-form" onSubmit={handleForm}>
                    <label htmlFor="token">Token</label>
                    <input
                        id="token"
                        className="klever-input"
                        type="text"
                        name="token"
                        value={inputToken}
                        onChange={(e) => {
                            setInputToken(e.target.value);
                        }}
                    />
                    <label htmlFor="balance">Balance</label>
                    <input
                        id="balance"
                        className="klever-input"
                        type="text"
                        name="balance"
                        value={inputBalance}
                        onChange={(e) => {
                            setInputBalance(e.target.value);
                        }}
                    />
                    {showButton ? (
                        <div className="remove-btn-wrapper">
                            <Button style="remove" onClick={toogle}>
                                Remove
                            </Button>

                            <Button style="primary" type="submit">
                                Save
                            </Button>
                        </div>
                    ) : (
                        <div className="primary-btn-wrapper">
                            <Button style="primary" type="submit">
                                Save
                            </Button>
                        </div>
                    )}
                </form>
            ) : (
                <form className="klever-form" onSubmit={handleForm}>
                    <label htmlFor="token">Token</label>
                    <input id="token" className="klever-input" type="text" name="token" />
                    <label htmlFor="balance">Balance</label>
                    <input id="balance" className="klever-input" type="text" name="balance" />
                    {showButton ? (
                        <div className="remove-btn-wrapper">
                            <Button style="remove" onClick={toogle} type="button">
                                Remove
                            </Button>

                            <Button style="primary" type="submit">
                                Save
                            </Button>
                        </div>
                    ) : (
                        <div className="primary-btn-wrapper">
                            <Button style="primary" type="submit">
                                Save
                            </Button>
                        </div>
                    )}
                </form>
            )}
        </>
    );
};

export default Form;
