import React from 'react';
import { Header } from '../components';
import { Form } from '../components';
import kleverLogo from '../images/logo.svg';
import starLogo from '../images/shooting-star.svg';

function AddToken() {
  return (
    <div>
      <Header kleverLogo={ kleverLogo } starLogo={ starLogo } btn={ false }/>
      <Form title='Add Token' />
    </div>
  );
}

export default AddToken;
