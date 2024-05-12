
import React, { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'    
import Nav from './components/Nav/index.jsx'
import Login from './pages/Login/Login'
import Citas from './pages/Citas'

const App = () => {

  const [showNav, setShowNav] = useState(true)
  return (
    <>
        {
            showNav && <Nav />
        }

        <BrowserRouter>
            <Routes>

                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/Login" element={<Login setShowNav={setShowNav} />} />
                <Route path="/Citas" element={<Citas />} />
            </Routes>
        </BrowserRouter>
    </>
)
}
 

export default App