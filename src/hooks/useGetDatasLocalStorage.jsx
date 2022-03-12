const useGetLocalStorage = () => {
    const result = JSON.parse(localStorage.getItem('tokens'));

    return [result];
};

export default useGetLocalStorage;
