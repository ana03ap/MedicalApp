
import React, { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'    
import Nav from './components/Nav/index.jsx'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import Citas from './pages/Citas/Citas'
import FormPpl from './components/Formulario/FormPpl'
const App = () => {

  const [showNav, setShowNav] = useState(true)
  const [showFooter, setShowFooter] = useState(true)
  return (
    <>
        {/* {
            showNav && <Nav />
        } */}

        <BrowserRouter>
            <Routes>
                
                <Route path="/Nav" element={<Nav />} />
                <Route path="/" element={<HomePage   />} />
                <Route path="/Login" element={<Login setShowNav={setShowNav} setShowFooter={setShowFooter}  />} />
                <Route path="/Citas" element={<Citas  />} />
                <Route path="/Form" element={<FormPpl  />} />
            </Routes>
        </BrowserRouter>

        {
            showFooter && <Footer />
        }
    </>


)


}
 

export default App