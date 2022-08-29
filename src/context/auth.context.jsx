import { useState } from "react";
import { useContext, createContext } from "react";
import userService from "../services/userservice";

export const authContext = createContext(userService.getUser());
authContext.displayName = "auth-context";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(userService.getUser());

  const refreshUser = () => {
    setUser(userService.getUser());
  };

  const createUser = (user) => {
    return userService.CreateUser(user);
  };

  const login = async (credentials) => {
    const response = await userService.LoginUser(credentials);
    refreshUser();
    return response;
  };

  const logout = () => {
    userService.LogOutUser();
    refreshUser();
  };

  return (
    <authContext.Provider value={{ createUser, login, logout, user }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};
