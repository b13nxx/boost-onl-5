import { createContext, useState } from "react";
import AuthService from "../services/AuthServise";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false)


  const login = async(email, password) => {
    try {
      const response = await AuthService.login(email,password)
      console.log(response);
      if(response.access_token){
        setIsAuthenticated(true)
        return response
      }
    } catch (error) {
      setIsAuthenticated(false)
      return response
    }
  }

  const logout = () => {
    AuthService.logout()
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{isAuthenticated, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
