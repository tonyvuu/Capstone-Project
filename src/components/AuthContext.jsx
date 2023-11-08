import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null)

  const login = (user) => {
    setIsAuthenticated(true);
    // setUsername(username);
    setUserData(user)
  };

  const navigate = useNavigate();

  const logout = async () => {
    try {
      await fetch("https://capstone-project-server-sage.vercel.app");
      console.log("Logout Successful");
      setIsAuthenticated(false);
      setUserData(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
