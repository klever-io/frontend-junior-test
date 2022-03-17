import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { logo } = props

  return (
    <div>
      <img src={ logo } alt='logo da klever'/>
    </div>
  );
}


Header.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Header;
