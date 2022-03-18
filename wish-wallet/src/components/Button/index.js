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
  kleverLogo: PropTypes.string.isRequired,
  starLogo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  redirect: PropTypes.func.isRequired,
  values: PropTypes.func.isRequired,
};

export default Button;
