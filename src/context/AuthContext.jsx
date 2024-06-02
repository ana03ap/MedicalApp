import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userGoogleData, setUserGoogleData] = useState(null);

  const saveUserGoogleData = (data) => {
    setUserGoogleData(data);
  };


  return (
    <AuthContext.Provider value={{ userGoogleData, setUserGoogleData }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
