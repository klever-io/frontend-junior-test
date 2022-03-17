import React from 'react';
import PropTypes from 'prop-types';

function WishWallet({ image, btn }) {
  const renderButton = () => {
    if (btn) {
      return <button>Add</button>
    }
  }
  return (
    <div>
        <img src={ image } alt='start-logo'/>
        { renderButton() }
    </div>
  );
}

WishWallet.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  btn: PropTypes.bool.isRequired,
};

export default WishWallet;
