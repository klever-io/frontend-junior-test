import React from 'react';
import PropTypes from 'prop-types';
import { Content, ContentImage, Image } from './styles';
import Button from '../Button';

function WishWallet({ image, btn }) {
  const renderButton = () => {
    if (btn) {
      return(
        <Button
          name='Add Token'
          type='button'
          color='#B039BF'
          link='register-token'
          redirectPage={ true }
        />
      )
    }
  }
  return (
    <Content btn={ btn }>
      <ContentImage>
        <Image src={ image } alt='start-logo'/>
        <h2>Wish Wallet</h2>
      </ContentImage>
      <div>
        { renderButton() }
      </div>

    </Content>
  );
}

WishWallet.propTypes = {
  image: PropTypes.string.isRequired,
  btn: PropTypes.bool.isRequired,
};

export default WishWallet;
