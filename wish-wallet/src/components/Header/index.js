import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './styles';
import WishWallet from '../WishWallet';

function Header({ kleverLogo, starLogo, btn }) {
  return (
    <div>
      <Image src={ kleverLogo } alt='logo da klever'/>
      <WishWallet image={ starLogo } btn={ btn } />
    </div>
  );
}


Header.propTypes = {
  kleverLogo: PropTypes.string.isRequired,
  starLogo: PropTypes.string.isRequired,
  btn: PropTypes.bool.isRequired,
};

export default Header;
