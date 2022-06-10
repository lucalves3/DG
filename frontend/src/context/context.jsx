import React, { useState } from 'react';

export const Context = React.createContext({});

export const ContextProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  const values = {
    apiData,
    setApiData,
  };

  return (
    <Context.Provider value={values} displayName="Context">
      {children}
    </Context.Provider>
  );
};
