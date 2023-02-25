import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import AssestsContext from './AssetsContext';

function AssetsProvider({ children }) {
  const [assets, setAssets] = useState([]);
  const [form, setForm] = useState({ token: '', balance: '' });

  const values = useMemo(() => ({
    assets, setAssets, form, setForm,
  }), [assets, setAssets, form, setForm]);

  return (
    <AssestsContext.Provider value={values}>
      { children }
    </AssestsContext.Provider>
  );
}

AssestsContext.propTypes = {
  children: PropTypes.func.isRequired,
};

export default AssetsProvider;
