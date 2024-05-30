import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authDetail, setAuthDetail] = useState(null);

  return (
    <AuthContext.Provider value={{ authDetail, setAuthDetail }}>
      {children}
    </AuthContext.Provider>
  );
};
