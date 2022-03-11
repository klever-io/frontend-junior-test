import React from 'react';
import Form from '../../components/Form';
import Wallet from '../../components/Wallet';
import Button from '../../components/Button';
import './style.css';

const AddToken = () => {
    return (
        <>
            <div className="klever-container-add">
                <div className="klever-form-wrapper">
                    <div className="klever-star-wrapper">
                        <Wallet />
                    </div>
                    <div className="klever-button-wrapper">
                        <p>Add Token</p>
                        <Button>Back</Button>
                    </div>
                    <Form />
                    <Button primary={true}>Save</Button>
                </div>
            </div>
        </>
    );
};

export default AddToken;
