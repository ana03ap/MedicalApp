import {useState} from 'react'

const useLogin = () => {
    const [isLogin, setIsLogin] = useState(false)
  const CreateUser = (user) => {
    console.log(user)
    localStorage.setItem('user', JSON.stringify(user))
  }
  const GetUser = () => {
    const UserLocal = JSON.parse(localStorage.getItem('user'))
    console.log(UserLocal)
    if (UserLocal) {
        setIsLogin(true)
    } 
  } 
  return {
    CreateUser,
    GetUser,
    isLogin
  }
}

export default useLogin