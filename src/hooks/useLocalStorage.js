import { useCallback, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const useLocalStorage = () => {
    const [storage, setStorage] = useState(() => {
        const storageKey = localStorage.key('tokens');
        if (!storageKey) return [];
        const localStoreData = JSON.parse(localStorage.getItem('tokens'));
        return [...localStoreData];
    });
    const location = useLocation();
    const navigate = useNavigate();
    const { tokenName } = useParams();
    const routePathName = location.pathname;

    const findToken = (tokenName) => {
        const searchInStorage = storage.find(
            (val) => val.name.toUpperCase().trim() === tokenName.toUpperCase().trim()
        );
        return searchInStorage;
    };
    const setToken = useCallback(
        (value) => {
            const fetchedToken = findToken(value.name);
            if (routePathName === '/add' && !fetchedToken) {
                const newToken = [...storage, value];
                localStorage.setItem('tokens', JSON.stringify(newToken));
                return newToken;
            }
            if (routePathName !== '/add') {
                const token = findToken(tokenName);
                const { name, balance } = value;
                const findTokenName = storage.find(
                    (item) => item.name.toUpperCase().trim() === value.name.toUpperCase().trim()
                );
                if (!findTokenName || findTokenName.name === tokenName) {
                    const setNewStorage = [...storage];
                    setNewStorage[setNewStorage.indexOf(token)] = {
                        name: name.toUpperCase().trim(),
                        balance: balance.trim(),
                    };
                    setStorage(setNewStorage);
                    localStorage.setItem('tokens', JSON.stringify([...setNewStorage]));
                    return token;
                }
            }
            if (fetchedToken) throw new Error('this token already exists');
        },
        [routePathName, storage, tokenName]
    );
    const deleteValue = (tokenName) => {
        const arr = [...storage];
        const searchInStorage = storage.find(
            (val) => val.name.toUpperCase() == tokenName.toUpperCase()
        );
        arr.splice(arr.indexOf(searchInStorage), 1);
        const result = localStorage.setItem('tokens', JSON.stringify(arr));

        setStorage(result);
        return navigate('/');
    };
    return [storage, setToken, deleteValue, findToken];
};

export default useLocalStorage;
