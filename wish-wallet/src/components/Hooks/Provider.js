import React, { useState } from 'react';
import AppContext from './AppContext';
import PropTypes from 'prop-types';

const Provider = ({ children }) => {
  const [editItem, setEditItem] = useState();
  const [stateB, setStateB] = useState('initialStateB');
  const contextValue = {
    editItem,
    setEditItem,
    stateB,
    setStateB,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Provider;