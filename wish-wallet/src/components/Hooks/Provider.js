import React, { useState } from 'react';
import AppContext from './AppContext';
import PropTypes from 'prop-types';

const Provider = ({ children }) => {
  const [editItem, setEditItem] = useState();
  const [tokenValue, setTokenValue] = useState('');
  const [balanceValue, setBalanceValue] = useState('');
  const [messageErro, setMessageErro] = useState('');

  const contextValue = {
    editItem,
    setEditItem,
    tokenValue,
    setTokenValue,
    balanceValue,
    setBalanceValue,
    messageErro,
    setMessageErro,
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