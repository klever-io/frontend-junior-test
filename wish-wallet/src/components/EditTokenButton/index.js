import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
// import { setToken } from '../../Utils/saveToken';


function EditTokenButton({ tokenValue, balanceValue }) {
  const editToken = () => {
    { tokenValue, balanceValue }
  }

  return (
    <div>
      <Button
        name='Delete'
        type='button'
        color='#8C0303'
        link='/'
        redirectPage={ () => {} }
      />

      <Button
        name='Save'
        type='button'
        color='#B039BF'
        link='/'
        redirectPage={ () => editToken() }
      />
    </div>
  );
}


EditTokenButton.propTypes = {
  tokenValue: PropTypes.string.isRequired,
  balanceValue: PropTypes.string.isRequired,
};

export default EditTokenButton;
