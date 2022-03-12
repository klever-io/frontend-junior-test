import { useState } from 'react';

const useEditToken = ({ name, balance }) => {
    console.log(balance);
    const [storage] = useState(() => {
        const result = JSON.parse(localStorage.getItem('tokens'));
        console.log(result, name, balance);
        return result;
    });

    return [storage];
};

export default useEditToken;
