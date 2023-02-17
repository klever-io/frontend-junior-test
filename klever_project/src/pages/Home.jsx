import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const [arrayTable, setArrayTable] = useState([]);

    useEffect(() => {
        const saveData = JSON.parse(localStorage.getItem('table')) || [];
        setArrayTable(saveData);
    }, []);
    

return (
    <div>
    <div>
        <h1> Wish Wallet</h1>
        <Link to="/AddToken">
        <button
        type='button'
        >
            Add Token 
        </button>
        </Link>
    </div>
        <table>

            <thead>
                <tr>
                    <th> Token </th>
                    <th> Balance </th>
                </tr>
        </thead>

        <tbody>
        {arrayTable.map((value, index) => (
            <tr key={index}>
                <td>{value.token}</td>
                <td>{value.balance}</td>
                <td>
                <Link to={ `/EditToken/${ index }` }>
                edit
                </Link>
                </td>
            </tr>
        ))}
        </tbody>

        </table>
    </div>
)
}