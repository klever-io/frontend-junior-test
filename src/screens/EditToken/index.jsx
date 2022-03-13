import React from 'react';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Navbar from '../../components/Navbar';
import Wallet from '../../components/Wallet';
import useNavigated from '../../hooks/useNavigate';
import './style.css';
const EditToken = () => {
    const navigateTo = useNavigated('/');

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
                        <Button style="btn" onClick={navigateTo}>
                            Back
                        </Button>
                    </div>
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default EditToken;
