import React from 'react';
import PropTypes from 'prop-types';
import { Container, Btn } from './styles';

function Button({ name, type, color }) {
  return (
    <Container>
      <Btn
        color={ color }
        name={ name }
        type={ type }
      >
        { name }
      </Btn>
    </Container>
  );
}


Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
