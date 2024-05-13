
import React from 'react'
import '../Nav/index.css'
import Logo from "../Logo"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Nav = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        // Navegar a una ruta específica cuando se hace clic en el botón
        navigate('/Login');
      };
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
                    <ul><li >
                    <Link to="/Login">
                    <a href="">Inicia Sesion</a>
                    </Link>
                        </li>
                        </ul>


                    <ul><li>
                    <Link to="/Citas">
                        <a href="">Services</a>
                        </Link>
                        </li></ul>

                    <ul><li>
                    <Link to="/">
                    <a href="">About</a>
                    </Link>
                       
                        
                        </li></ul>
                </div>


            </nav>
        </>
    )
}

export default Nav

