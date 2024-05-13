import React from 'react'
import '../Nav/index.css'
import Logo from "../Logo"
const Nav = () => {
    return (
        <>
            <nav className='navBar'>

                <div className="titleDesc">
                    <div className="logo">
                    <Logo color={"#fff"} widthSvg={"2pc"} colorHover={"red"}/>
                    </div>
                    <h1 className='titleSteam'>STEAM MEDICAL</h1>
                </div>

                <div className="links">
                    <ul><li>
                    
                        <a href='\Login'>Inicia Sesión</a></li>
                        </ul>


                    <ul><li><a href="\Citas">Services</a></li></ul>
                    <ul><li><a href="\">About</a></li></ul>
                </div>


            </nav>
        </>
    )
}

export default Nav

