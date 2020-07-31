import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

function Provider({ children }) {
  const [snack, setSnack] = useState({
    type: '', // success, error, warning, info
    message: '',
  });

  const state = {
    snackState: [snack, setSnack],
  };

  return (
    <AppContext.Provider
      value={state}
    >
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element,
};

Provider.defaultProps = {
  children: null,
};

export default AppContext;

export { Provider };
