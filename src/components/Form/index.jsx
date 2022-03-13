import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useHandleFormData from '../../hooks/useHandleFormData';
import Button from '../Button';

import Modal from '../Modal';

import './style.css';

const Form = () => {
    const [token, setToken, balance, setBalance, handleForm, formTokenError, fortmBalanceError] =
        useHandleFormData();
    const [isOpen, toogleIsOpen] = useState(false);
    const location = useLocation();
    const renderButton = location.pathname == '/edit' ? true : false;
    const toogle = () => {
        toogleIsOpen((prev) => !prev);
    };
    return (
        <>
            {isOpen && <Modal toogleIsOpen={toogleIsOpen} />}

            <form className="klever-form">
                <label htmlFor="token">Token</label>
                <input
                    id="token"
                    className="klever-input"
                    type="text"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                />{' '}
                {formTokenError && <p className="error-message">{formTokenError}</p>}
                <label htmlFor="balance">Balance</label>
                <input
                    id="balance"
                    className="klever-input"
                    type="text"
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                />
                {fortmBalanceError && <p className="error-message">{fortmBalanceError}</p>}
                {renderButton ? (
                    <div className="remove-btn-wrapper">
                        <Button style="remove" onClick={toogle}>
                            Remove
                        </Button>

                        <Button style="primary" type="submit" onClick={handleForm}>
                            Save
                        </Button>
                    </div>
                ) : (
                    <div className="primary-btn-wrapper">
                        <Button style="primary" type="submit" onClick={handleForm}>
                            Save
                        </Button>
                    </div>
                )}
            </form>
        </>
    );
};

export default Form;
