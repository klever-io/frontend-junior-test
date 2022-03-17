import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './styles';

function Header({ logo }) {
  return (
    <div>
      <Image src={ logo } alt='logo da klever'/>
    </div>
  );
}


Header.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Header;
