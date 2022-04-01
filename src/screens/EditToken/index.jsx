import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Navbar from '../../components/Navbar';
import Wallet from '../../components/Wallet';

import './style.css';
const EditToken = () => {
    const navigate = useNavigate();
    const handleNavigationForHomeRoute = () => navigate('/');
    const { tokenName } = useParams();
    console.log(tokenName);
    return (
        <div className="edit-body">
            <Navbar />
            <div className="klever-container-add">
                <div className="klever-form-wrapper">
                    <div className="klever-wallet-wrapper">
                        <Wallet />
                    </div>
                    <div className="klever-button-wrapper">
                        <p className="klever-paragraph">Edit Token</p>
                        <Button style="btn" onClick={handleNavigationForHomeRoute}>
                            Back
                        </Button>
                    </div>
                    <Form tokenName={tokenName} />
                </div>
            </div>
        </div>
    );
};

export default EditToken;
