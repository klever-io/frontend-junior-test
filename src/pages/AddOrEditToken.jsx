import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function AddOrEditToken() {
  const location = useLocation();
  const [title, setTitle] = useState('');

  useEffect(() => {
      if (location.pathname.includes('/edit')) {
        setTitle('Edit');
      } else {
        setTitle('Add')
      }
  }, [location]);

  return (
    <div>{title}</div>
  )
}

export default AddOrEditToken;