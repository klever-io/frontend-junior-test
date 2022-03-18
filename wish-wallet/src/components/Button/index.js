import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, type, color }) {
  return (
    <div>
      <button
        name={ name }
        type={ type }
      >
        { name }
      </button>
    </div>
  );
}


Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
