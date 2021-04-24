import React, { useState, createContext } from "react";

export const ToggleContext = createContext();

export const ToggleProvider = (props) => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isModified, setIsModified ] = useState(false);

  return (
    <ToggleContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isModified,
        setIsModified
      }}
    >
      {props.children}
    </ToggleContext.Provider>
  );
};
