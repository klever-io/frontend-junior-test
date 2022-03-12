import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useLocalStorage from './useLocalStorage';

const useHandleFormData = () => {
    const [, setValue] = useLocalStorage();
    const location = useLocation();
    const tokenInitialValue = location.state ? location.state.name : '';
    const balanceInitialValue = location.state ? location.state.balance : '';
    const [token, setToken] = useState(tokenInitialValue);
    const [balance, setBalance] = useState(balanceInitialValue);
    const navigate = useNavigate();
    console.log(token, balance);

    const handleForm = (e) => {
        try {
            e.preventDefault();
            if (token.length < 2 || balance.length == 0) {
                console.log('Os dados precisam ser enviados');
                return;
            } else {
                const result = setValue({ name: token, balance });
                console.log(result);
                navigate('/');
                return;
            }
        } catch (e) {
            console.log(e.message);
        }
    };

    return [token, setToken, balance, setBalance, handleForm];
};

export default useHandleFormData;
