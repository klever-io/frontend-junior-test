import React from 'react';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Wallet from '../../components/Wallet';
const EditToken = () => {
    return (
        <div className="klever-container-add">
            <div className="klever-form-wrapper">
                <div className="klever-wallet-wrapper">
                    <Wallet />
                </div>
                <div className="klever-button-wrapper">
                    <p>Edit Token</p>
                    <Button pathTo="/">Back</Button>
                </div>
                <Form />
            </div>
        </div>
    );
};

export default EditToken;
