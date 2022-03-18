import React from 'react';
import PropTypes from 'prop-types';
import { ContentImage, Image } from './styles';

function WishWallet({ image, btn }) {
  const renderButton = () => {
    if (btn) {
      return <button>Add</button>
    }
  }
  return (
    <div>
      <ContentImage>
        <Image src={ image } alt='start-logo'/>
        <h2>Wish Wallet</h2>
        { renderButton() }
      </ContentImage>

    </div>
  );
}

WishWallet.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  btn: PropTypes.bool.isRequired,
};

export default WishWallet;
