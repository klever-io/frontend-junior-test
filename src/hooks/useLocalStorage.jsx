import { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useLocalStorage = () => {
    const [storage, setStorage] = useState(() => {
        // inicia o storage com o valor armazenado no localStorage
        const storageKey = localStorage.key('tokens');
        if (!storageKey) return [];
        const localStoreData = JSON.parse(localStorage.getItem('tokens'));
        return [...localStoreData];
    });
    const location = useLocation();
    const navigate = useNavigate();
    // recebe os estado passado pelo navigate
    const routeState = location.state;
    const routePathName = location.pathname;

    const setValue = useCallback(
        (value) => {
            // confere se o token que está sendo criado pelo form já existe no storage
            const searchInStorage = storage.find(
                (val) => val.name.toUpperCase() === value.name.toUpperCase()
            );

            if (!searchInStorage) {
                if (routePathName == '/edit' && routeState) {
                    // se a rota for edit, busca o valor atual do estado
                    const searchInStorage = storage.find(
                        (val) => val.name.toUpperCase() == routeState.name.toUpperCase()
                    );
                    const arr = [...storage];
                    arr[arr.indexOf(searchInStorage)] = value;
                    const result = localStorage.setItem('tokens', JSON.stringify(arr));
                    setStorage(result);
                    return storage;
                }
                // se o token não existe acrescenta os que jão estavam no storage e acrescenta o novo
                const result = localStorage.setItem('tokens', JSON.stringify([...storage, value]));
                setStorage(result);
                return storage;
            } else {
                throw new Error('This token already exists');
            }
        },
        [routePathName, routeState, storage]
    );
    const deleteValue = () => {
        const arr = [...storage];

        const searchInStorage = storage.find((val) => val.name == routeState.name);
        arr.splice(arr.indexOf(searchInStorage), 1);
        const result = localStorage.setItem('tokens', JSON.stringify(arr));

        setStorage(result);
        return navigate('/');
    };
    return [storage, setValue, deleteValue];
};

export default useLocalStorage;
