import React from 'react';
import PropTypes from 'prop-types';
import { ContentImage, Image } from './styles';
import Button from '../Button';

function WishWallet({ image, btn }) {
  const renderButton = () => {
    if (btn) {
      return(
        <Button
          name='Add Token'
          type='button'
          color='#B039BF'
        />
      )
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
