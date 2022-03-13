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
    const [fieldFomrError, throwFieldError] = useState([]);

    const handleForm = (e) => {
        try {
            e.preventDefault();
            if (token.length < 2) {
                const verifyError = fieldFomrError.find(
                    (element) => element == 'This field token needs to be filled'
                );
                !verifyError &&
                    throwFieldError([...fieldFomrError, 'This field token needs to be filled']);
            }

            if (balance.length == 0) {
                const verifyError = fieldFomrError.find(
                    (element) => element == 'This field balance needs to be filled'
                );

                !verifyError &&
                    throwFieldError([...fieldFomrError, 'This field balance needs to be filled']);
            } else {
                setValue({ name: token, balance });
                return navigate('/');
            }
        } catch (e) {
            return throwFieldError([...fieldFomrError, e.message]);
        }
    };

    return [token, setToken, balance, setBalance, handleForm, fieldFomrError];
};

export default useHandleFormData;
