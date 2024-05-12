import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Navigate } from 'react-router-dom'

const ProtecteRouter = ({children}) => {
    const {isLogin} = useContext(AppContext)
    console.log('protecte', isLogin)
    if (isLogin) {
       return (
       <>
        <Navigate to={'/'}/>
        {children}
        </>
       )
    }else {
        return (
            <>
             <Navigate to={'/Login'}/>
             </>
            )
    }
}

export default ProtecteRouter