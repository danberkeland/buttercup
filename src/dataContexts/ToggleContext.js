import React, { useState, createContext } from "react";

export const ToggleContext = createContext();

export const ToggleProvider = (props) => {
  const [ isLoading, setIsLoading ] = useState(false);

  return (
    <ToggleContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {props.children}
    </ToggleContext.Provider>
  );
};
