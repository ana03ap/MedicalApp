
import React, { useState, useContext} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Nav from './components/Nav/index.jsx'
import Login from './pages/Login/Login'
import Citas from './pages/Citas/Citas'
import Footer from './components/Footer/Footer'
import Carrito from './pages//Carrito/Carrito'

import { AuthContext } from "./context/AuthContext.jsx";

const App = () => {
    const { isLogin2 } = useContext(AuthContext); // vaina pa traerme lo del login
    const [showNav, setShowNav] = useState(true)
    const [showFooter, setShowFooter] = useState(true)

    return (
        <>


            <BrowserRouter>
                <Routes>

                    <Route path="/Nav" element={<Nav />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Login" element={<Login setShowNav={setShowNav} setShowFooter={setShowFooter} />} />
                    <Route path="/Citas" element={<Citas />} />
                    <Route path="/Carrito" element={<Carrito />} />
                    <Route path="/Footer" element={<Footer />} />
                </Routes>
            </BrowserRouter>


        </>


    )


}


export default App