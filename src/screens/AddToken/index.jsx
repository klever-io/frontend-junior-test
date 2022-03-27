import React from 'react';
import Form from '../../components/Form';
import Wallet from '../../components/Wallet';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import './style.css';
import { useNavigate } from 'react-router-dom';

const AddToken = () => {
    const navigate = useNavigate();
    const handleNavigationForHomeRoute = () => navigate('/');
    return (
        <div className="add-body">
            <Navbar />
            <div className="klever-container-add">
                <div className="klever-form-wrapper">
                    <div className="klever-wallet-wrapper">
                        <Wallet />
                    </div>
                    <div className="klever-button-wrapper">
                        <p className="klever-paragraph">Add Token</p>
                        <Button style="btn" onClick={handleNavigationForHomeRoute}>
                            Back
                        </Button>
                    </div>
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default AddToken;
