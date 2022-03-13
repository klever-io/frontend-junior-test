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
    const [errorMessageToken, setErrorMessageToken] = useState('');
    const [errorMessageBalance, setErrorMessageBalance] = useState('');
    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        if (token.length < 2) {
            setErrorMessageToken('This field needs to be filled');
        }
        if (balance.length == 0) {
            setErrorMessageBalance('This field needs to be filled');
        } else {
            setValue({ name: token, balance });
            navigate('/');
            return;
        }
    };

    return [
        token,
        setToken,
        balance,
        setBalance,
        handleForm,
        errorMessageToken,
        errorMessageBalance,
    ];
};

export default useHandleFormData;
