import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useLocalStorage = () => {
    const location = useLocation();
    console.log(location);
    const [storage, setStorage] = useState(() => {
        const storageKey = localStorage.key('tokens');
        if (!storageKey) return [];
        const localStoreData = JSON.parse(localStorage.getItem('tokens'));
        return [...localStoreData];
    });
    console.log(storage, 'inital value');

    const setValue = useCallback(
        (value) => {
            console.log('hello');
            const filteredStorage = storage.find((val) => val.name === value.name);
            if (!filteredStorage) {
                // setStorage([...storage, value]);
                const result = localStorage.setItem('tokens', JSON.stringify([...storage, value]));
                setStorage(result);
                return storage;
            } else {
                if (location.pathname == '/edit') {
                    console.log(location.pathname, filteredStorage);
                    const arr = [...storage];
                    arr[arr.indexOf(filteredStorage)] = value;
                    const result = localStorage.setItem('tokens', JSON.stringify(arr));
                    setStorage(result);
                    return storage;
                }
                throw new Error('Este token já está cadastrado');
            }
        },
        [storage]
    );
    // const updateValue = (value) => {

    //     const tokens = storage;
    //     const result = tokens.filter((token) => token.name !== location.state.name);
    //     const updatedToken = localStorage.setItem('tokens', JSON.stringify([...result, value]));
    //     setStorage(updatedToken);
    //     return;

    // };
    return [storage, setValue];
};

export default useLocalStorage;
