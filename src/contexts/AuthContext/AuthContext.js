import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

/**
 * Inspired by an article from Kent C. Dodds 
 * https://kentcdodds.com/blog/authentication-in-react-applications
*/

export const AuthProvider = (props) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  
  const login = () => {
    setAuthenticated(true);
  };
  
  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout }}
      {...props}
    />
  );
};

export const useAuth = () => useContext(AuthContext);
