import { useNavigate } from 'react-router-dom';

const useNavigated = (path) => {
    const navigate = useNavigate();
    const navigateTo = () => {
        navigate(path);
    };

    return navigateTo;
};

export default useNavigated;
