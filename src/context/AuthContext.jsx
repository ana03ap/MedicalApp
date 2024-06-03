import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userGoogleData, setUserGoogleData] = useState(null);
  const [isLogin2, setIsLogin2] = useState(false)

  const saveUserGoogleData = (data) => {
    setUserGoogleData(data);
  };

 


  return (
    <AuthContext.Provider value={{ userGoogleData, setUserGoogleData, isLogin2, setIsLogin2 }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
