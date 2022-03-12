import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useLocalStorage = () => {
    const location = useLocation();
    console.log(location);
    const routeState = location.state;
    const routePathName = location.pathname;
    const [storage, setStorage] = useState(() => {
        const storageKey = localStorage.key('tokens');
        if (!storageKey) return [];
        const localStoreData = JSON.parse(localStorage.getItem('tokens'));
        return [...localStoreData];
    });
    console.log(storage, 'inital value');

    const setValue = useCallback(
        (value) => {
            const searchInStorage = storage.find((val) => val.name === value.name);
            if (!searchInStorage) {
                if (routePathName == '/edit' && routeState) {
                    const searchInStorage = storage.find((val) => val.name == routeState.name);
                    console.log(searchInStorage);
                    const arr = [...storage];
                    arr[arr.indexOf(searchInStorage)] = value;
                    const result = localStorage.setItem('tokens', JSON.stringify(arr));
                    setStorage(result, 3);
                    return storage;
                }
                const result = localStorage.setItem('tokens', JSON.stringify([...storage, value]));
                setStorage(result);
                return storage;
            } else {
                throw new Error('Este token já está cadastrado');
            }
        },
        [routePathName, routeState, storage]
    );
    return [storage, setValue];
};

export default useLocalStorage;
