import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import Button from '../Button';
import './style.css';
const Modal = ({ toogleIsOpen, tokenName }) => {
    const [, , deleteValue] = useLocalStorage();
    const handleDeleteToken = () => deleteValue(tokenName);
    const modalToogle = () => {
        toogleIsOpen(false);
    };

    return (
        <div className="alert-container">
            <div className="alert-wrapper">
                <div className="alert-top"></div>
                <p>Tem certeza que deseja remover o usuário?</p>
                <div className="btn-control-wrapper">
                    <Button style="remove" onClick={handleDeleteToken}>
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
