import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

export default function AddToken() {
const [token, setToken] = useState('')
const [balance, setBalance] = useState(0)
const history = useHistory();

useEffect(() => {
    const tokenStorage = JSON.parse(localStorage.getItem('token'));
    const balanceStorage = JSON.parse(localStorage.getItem('balance'));
    
    if (tokenStorage && balanceStorage) {
    setToken(tokenStorage);
    setBalance(balanceStorage);
    }
}, []);

const handleSubmit = () => {

    if (!token || balance <= 0) {
        alert('Por favor, coloque um valor válido para token e balance');
        return;
    }

    const data = [{token, balance }];
    const saveData = JSON.parse(localStorage.getItem('table')) || [];
    const updateData = [
        ...saveData,
        ...data
    ];

    localStorage.setItem('table', JSON.stringify(updateData));
    
    history.push('');
}


const handleInputToken = (e) => {
    setToken(e.target.value);
};

const handleInputBalance = (e) => {
    setBalance(e.target.value);
};


    return (
    <div>
        <h1> Wish Wallet</h1>
        <div>
        <h2>Add Token</h2>
        <Link to="">
        <button
        type='button'
        >
        Voltar 
        </button>
        </Link>
        </div>
    <div>
        Token
        <input type="text" onChange={ handleInputToken }  />
    </div>

    <div>
    Balance
        <input type="number" onChange={ handleInputBalance } />
    </div>
    <div>
        <button type="button" onClick={ handleSubmit } >
        Salvar
        </button>
    </div>
    </div>
    )
}
