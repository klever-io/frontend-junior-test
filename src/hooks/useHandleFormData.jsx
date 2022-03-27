import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useLocalStorage from './useLocalStorage';

const useHandleFormData = () => {
    const [, setValue] = useLocalStorage();
    const location = useLocation();
    const navigate = useNavigate();
    const tokenInitialValue = location.state ? location.state.name : '';
    const balanceInitialValue = location.state ? location.state.balance : '';
    const [token, setToken] = useState(tokenInitialValue);
    const [balance, setBalance] = useState(balanceInitialValue);
    const [fieldFormError, throwFieldError] = useState([]);

    const handleForm = (e) => {
        const TOKEN_INPUT_ERROR = 'This field token needs to be filled';
        const BALANCE_INPUT_ERROR = 'This field balance needs to be filled';
        try {
            e.preventDefault();

            if (token.length < 2) {
                const verifyError = fieldFormError.find((error) => error === TOKEN_INPUT_ERROR);
                return !verifyError && throwFieldError([...fieldFormError, TOKEN_INPUT_ERROR]);
            }

            if (balance.length == 0) {
                const verifyError = fieldFormError.find((error) => error === BALANCE_INPUT_ERROR);
                return !verifyError && throwFieldError([...fieldFormError, BALANCE_INPUT_ERROR]);
            }
            setValue({ name: token, balance });
            return navigate('/');
        } catch (e) {
            const verifyError = fieldFormError.find((error) => error === e.message);
            return !verifyError && throwFieldError([...fieldFormError, e.message]);
        }
    };

    return [token, setToken, balance, setBalance, handleForm, fieldFormError];
};

export default useHandleFormData;
