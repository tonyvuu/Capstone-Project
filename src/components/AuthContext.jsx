import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  const login = (username) => {
    setIsAuthenticated(true);
    setUsername(username);
  };

  const navigate = useNavigate();

  const logout = async () => {
    try {
      await fetch("http://localhost:3000/logout");
      console.log("Logout Successful");
      setIsAuthenticated(false);
      setUsername("");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
