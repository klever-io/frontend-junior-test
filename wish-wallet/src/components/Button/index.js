import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Btn } from './styles';

function Button({ name, type, color, redirectPage, link }) {
  const navigate = useNavigate();
  
  const redirect = () => {
    const token = redirectPage()
    return token ? navigate(link) : false;
  }
  
  return (
    <div>
      <Btn
      color={ color }
      name={ name }
      type={ type }
      onClick={ () => redirect() }
      >
        { name }
      </Btn>
    </div>
  );
}


Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  redirectPage: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
