import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import { useUserStorage } from "../Providers/UserStorage";

export const ProtectedRouter = ({ children }) => {
  const { login } = useUserStorage();

  return login ? children : <Navigate to="/login" />;
};
