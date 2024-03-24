import React from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);
  const [timestamp, setTimestamp] = React.useState(Date.now())

  console.log('AppProvider render')

  return (
    <AppContext.Provider
      value={{
        count,
        setCount,
        timestamp,
        setTimestamp
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => React.useContext(AppContext);