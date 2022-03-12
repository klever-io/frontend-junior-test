import React from 'react';

import useHandleFormData from '../../hooks/useHandleFormData';

import './style.css';

const Form = () => {
    const [token, setToken, balance, setBalance, handleForm] = useHandleFormData();

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
                    <button className="klever-primary-btn" type="submit" onClick={handleForm}>
                        Save
                    </button>
                </div>
            </form>
        </>
    );
};

export default Form;
