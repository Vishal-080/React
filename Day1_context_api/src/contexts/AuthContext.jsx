import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const handleTokenChange = (newToken) => {
    setToken(newToken);
  };
  return (
    <AuthContext.Provider value={{ token, handleTokenChange }}>
      {children}
    </AuthContext.Provider>
  );
};
