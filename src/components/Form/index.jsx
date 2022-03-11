import React from 'react';
import './style.css';

const Form = () => {
    return (
        <>
            <form className="klever-form">
                <label>Token</label>
                <input className="klever-input" type="text" />
                <label>Balance</label>
                <input className="klever-input" type="text" />
            </form>
        </>
    );
};

export default Form;
