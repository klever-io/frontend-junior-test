import React, { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import './style.css';

const Form = () => {
    const [, setValue] = useLocalStorage();
    const [token, setToken] = useState('');
    const [balance, setBalance] = useState('');

    const handleFormDatas = (e) => {
        e.preventDefault();
        if (token.length < 2 || balance.length == 0) {
            console.log('Os dados precisam ser enviados');
            return;
        } else {
            const result = setValue({ name: token, balance });
            console.log(result);
            return;
        }
    };
    return (
        <>
            <form className="klever-form">
                <label>Token</label>
                <input
                    className="klever-input"
                    type="text"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                />
                <label>Balance</label>
                <input
                    className="klever-input"
                    type="text"
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                />
                <div className="primary-btn-wrapper">
                    <button type="submit" onClick={handleFormDatas}>
                        Enviar
                    </button>
                </div>
            </form>
        </>
    );
};

export default Form;
