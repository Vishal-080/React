import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ age: 24, name: "Vishal" }}>
      {children}
    </AppContext.Provider>
  );
};
