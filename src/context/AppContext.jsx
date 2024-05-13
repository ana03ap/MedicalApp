import React, {createContext, useEffect, useState } from 'react'

import useLogin from '../hook/useLogin';
import apiMedical from "../Api/Medical";

import { isMobile } from "react-device-detect";



export const AppContext = createContext();
export const AppContextProvideer = ({children}) => {
  const {isLogin, GetUser} = useLogin()
  console.log(isLogin)


  useEffect(() =>{
    GetUser()
  },[])




  const [isMobileDevice, setIsMobile] = useState(false);
  const [data, setData] = useState([]);// data empieza vacio, y meto todo ahí 

  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Nationality, setNationality] = useState("");
  const [flag, setFlag] = useState("");
  const [profession, setProfession] = useState("");
  const [imagen, setImagen] = useState("");
  const [qualification, setQualification] = useState("");
  useEffect(() => {
    setIsMobile(isMobile);
    GetData();
  }, [ Name, Age,profession, Nationality,flag, imagen, qualification]);

  const GetData = async () => {
    
    try {
      const { data } = await apiMedical.get(
        `?&name=${Name}&age=${Age}$profession=${profession}$qualification=${qualification}&nationality.name=${Nationality}&nationality.photo=${flag}&image=${imagen}`
      );

     
      console.log("here")
      console.log(data)
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
 
  const setNameParam = (value) => {
    setName(value);
  };

  const setAgeParam = (value) => {
    setAge(value);
  };

  const setNationalityParam = (value) => {
    setNationality(value);
  };

  const setFlagParam = (value) => {
    setFlag(value);
  };









 return (<>
  <AppContext.Provider value={{
    isLogin,
    data,
        GetData,
        
        isMobileDevice,
        setNameParam ,
        setAgeParam, 
        setNationalityParam ,
      
        setFlagParam ,
    }}> 
    {children}
  </AppContext.Provider>
 </>)
}