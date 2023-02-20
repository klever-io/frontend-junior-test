import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import logo from '../assets/logo.svg'
import shooting from '../assets/shooting-star.svg'

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
    <div className='div-root'>
        <img className='logo-klever' src={logo} alt='logo' />
        <div className='div-header'>
            <img className='shooting-star'src={shooting} alt='shooting-star' />
            <h1 className='title-wallet'> Wish Wallet</h1>
        </div>
        <div className='div-title'>
        <h2 className='second-title'>Add Token</h2>
        <Link to="">
        <button
        className='button-back'
        type='button'
        >
        Voltar 
        </button>
        </Link>
        </div>
        <div className='div-label'>
        Token
        <input type="text" onChange={ handleInputToken }  />
        
        Balance
        <input type="number" onChange={ handleInputBalance } />
        </div>

        <div className='div-button'>
        <button className='button-save' type="button" onClick={ handleSubmit } >
        Salvar
        </button>
    </div>
    </div>
    )
}
