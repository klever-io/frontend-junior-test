import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Btn } from './styles';

function Button({ name, type, color, redirectPage, link }) {
  const navigate = useNavigate();
  const redirect = () => {
    if (redirectPage) {
      return navigate(link)
    }
    return alert('Incorrecto!');
  }

  return (
    <Btn
      color={ color }
      name={ name }
      type={ type }
      onClick={ () => redirect() }
    >
      { name }
    </Btn>
  );
}


Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  redirectPage: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
