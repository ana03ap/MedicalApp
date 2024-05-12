import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import useLogin from '../hook/useLogin';

export const AppContext = createContext();

export const AppContextProvideer = ({children}) => {
  const {isLogin, GetUser} = useLogin()
  console.log(isLogin)
  useEffect(() =>{
    GetUser()
  },[])
 return (<>
  <AppContext.Provider value={{isLogin}}> 
    {children}
  </AppContext.Provider>
 </>)
}