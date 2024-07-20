import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const USER_BASE_API_URL = "http://localhost:4000/api/auth/";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(USER_BASE_API_URL + "checkAuth", {
          headers: { Authorization: localStorage.getItem("token") },
        });
        setUser(response.data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);
  const login = async (email, password) => {
    const response = await axios.post(USER_BASE_API_URL + "login", {
      email,
      password,
    });
    const token = response.data.token.split(" ")[1];
    localStorage.setItem("token", token);
    setUser(response.data.user);
  };
  const logout = async () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
