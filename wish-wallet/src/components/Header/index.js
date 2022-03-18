import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './styles';
import WishWallet from '../WishWallet';

function Header({ kleverLogo, starLogo }) {
  return (
    <div>
      <Image src={ kleverLogo } alt='logo da klever'/>
      <WishWallet image={ starLogo } btn={ true } />
    </div>
  );
}


Header.propTypes = {
  kleverLogo: PropTypes.string.isRequired,
  starLogo: PropTypes.string.isRequired,
};

export default Header;
