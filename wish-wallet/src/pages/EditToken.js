import React from 'react';
import { Header } from '../components';
import { Form } from '../components';
import kleverLogo from '../images/logo.svg';
import starLogo from '../images/shooting-star.svg';

function EditToken() {
  return (
    <div>
      <Header kleverLogo={ kleverLogo } starLogo={ starLogo } btn={ false }/>
      <Form title='Edit Token' />
    </div>
  );
}

export default EditToken;
