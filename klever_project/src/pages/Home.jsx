import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import shooting from '../assets/shooting-star.svg'


export default function Home() {
    const [arrayTable, setArrayTable] = useState([]);

    useEffect(() => {
        const saveData = JSON.parse(localStorage.getItem('table')) || [];
        setArrayTable(saveData);
    }, []);
    

return (
    <div className='div-root'>
        <img className='logo-klever' src={logo} alt='logo' />
        <div className='div-header'>
            <img className='shooting-star'src={shooting} alt='shooting-star' />
            <h1 className='title-wallet'> Wish Wallet</h1>
        
            <Link to="/AddToken">
            <button
            className='button-home'
            type='button'
            >
            Add Token 
            </button>
            </Link>
            </div>

    <div className='table-container'>
        <table>

            <thead>
                <tr>
                    <th className='th-token'> Token </th>
                    <th className='th-balance'> Balance </th>
                </tr>
        </thead>

        <tbody>
        {arrayTable.map((value, index) => (
            <tr key={index}>
                <td>{value.token}</td>
                <td>{value.balance}</td>
                <td>
                <Link
                    to={{
                        pathname: '/EditToken',
                        state: { token: value.token }
                        }}
                        className='button-edit is-selected'
>
                        edit
                
                </Link>
                </td>
            </tr>
        ))}
        </tbody>

        </table>
        </div>
    </div>
)
}
