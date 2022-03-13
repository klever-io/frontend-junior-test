import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
// import useNavigated from '../../hooks/useNavigate';
import Button from '../Button';
import './style.css';
const Modal = ({ toogleIsOpen }) => {
    const modalToogle = () => {
        toogleIsOpen(false);
    };
    const [, , deleteValue] = useLocalStorage();
    // const navigateTo = useNavigated('/');
    return (
        <div className="alert-container">
            <div className="alert-wrapper">
                <div className="top"></div>
                <p>Tem certeza que deseja remover o usuário?</p>
                <div className="btn-control-wrapper">
                    <Button style="remove" onClick={deleteValue}>
                        Remove
                    </Button>
                    <Button style="btn" onClick={modalToogle}>
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
