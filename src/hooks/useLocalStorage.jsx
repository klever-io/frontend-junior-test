import { useState } from 'react';

const useLocalStorage = () => {
    const [storage, setStorage] = useState(() => {
        const fetchDatas = JSON.parse(localStorage.getItem('tokens'));
        return [...fetchDatas];
    });

    const setValue = (value) => {
        const filteredStorage = storage.find((val) => val.name === value.name);
        if (!filteredStorage) {
            // setStorage([...storage, value]);
            const result = localStorage.setItem('tokens', JSON.stringify([...storage, value]));
            setStorage(result);
            return storage;
        } else {
            return 'Este token já está cadastrado';
        }
    };
    return [storage, setValue];
};

export default useLocalStorage;
