import React, { useContext, useEffect } from "react";
import { GlobalStyles } from "../../styles/GlobalStyles";
import Styles from "./Styles";
import ReactIcon, {
  ColombiaGov,
  ColombiaVida,
  Eye,
  EyeNot,
  Facebook,
  Google,
  Instagram,
  YouTube,
} from "../../../public/svg/index";

import ApiMedical from "../../Api/Medical";
import Logo from "../../components/Logo";
import useForm from "../../hook/useForm";
import useLogin from "../../hook/useLogin";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from '../../context/AuthContext';

const Login = ({ setShowNav, setShowFooter }) => {

  const { setUserGoogleData,setIsLogin2 } = useContext(AuthContext);//creando la variable pa mandar las cosas pa citas

  const location = useLocation();
  if (location.pathname == "/Login") {
    setShowNav(false);
    setShowFooter(false);
  }

  const navigate = useNavigate();
  const { OnchangeForm, setForm, state } = useForm({
    email: "",
    password: "",
  });
  const { CreateUser } = useLogin();

  console.log(state);
  useEffect(() => {
    const GetaData = async () => {
      const users = await ApiMedical.get("/testimony");
      console.log(users);
    };
    GetaData();
  }, []);
  return (
    <div style={Styles.containerPages}>
      <div style={{ display: "flex" }}>
        <div style={{ ...Styles.containerSection, ...GlobalStyles.colum }}>
          <h1
            className="available font-bold"
            style={{
              fontSize: "4pc",
            }}
          >
            MEDICAL APP
          </h1>
          <p>¡Bienvenido de nuevo! Por favor ingrese sus datos.</p>
          <form
            style={{ ...Styles.Form, ...Styles.P }}
            onSubmit={(e) => {
              e.preventDefault();
              console.log("se enviop");
              CreateUser(state);
              setForm();
              // navigate("/")
            }}
          >
            <label htmlFor="email" style={Styles.containerInput}>
              <p>Email</p>
              <input
                type="email"
                placeholder="Ingresa tu Email"
                name="email"
                style={GlobalStyles.borderBtn}
                onChange={({ target: { name, value } }) =>
                  OnchangeForm(value, name)
                }
                value={state.email}
              />
            </label>
            <label htmlFor="Password" style={Styles.containerInput}>
              <p>Contraseña</p>
              <input
                type="password"
                placeholder="Ingresa tu Contraseña"
                name="password"
                style={GlobalStyles.borderBtn}
                onChange={({ target: { value, name } }) =>
                  OnchangeForm(value, name)
                }
                value={state.password}
              />
            </label>
            <button style={{ ...GlobalStyles.borderBtn, ...Styles.P }}>
              Iniciar sesión
            </button>
            <button
              style={{
                ...GlobalStyles.borderBtn,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6pc",
                ...Styles.P,
              }}
              
            >
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  const decoded = jwtDecode(credentialResponse?.credential);
                  setUserGoogleData(decoded);// aqui voy a guardar la info cuando me loguee
                  console.log(decoded.picture);
                  setIsLogin2(true);//ponerlo que ya está logueado pa poder pedir citas
                  navigate("/")
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
              {/* <Google width={2} color={"#fff"} />
              Inicia sesión con Google */}
            </button>
          </form>
        </div>
        <div
          style={{
            ...Styles.containerSection,
            ...GlobalStyles.center,
            alignItems: "end",
            justifyContent: "flex-start",
            
          }}
        >
          <p
            style={{
              fontSize: "2.5pc",
              fontWeight: "bold",
              width: "30pc",
              textOverflow: "ellipsis",
              //   border: "1px solid red",
              height: "9pc",
              //   marginBottom: "9pc",
              ...Styles.h1,
            }}
          >
            Tu salud nuestra preocupación
          </p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            ...Styles.containerSection,
            height: "29vh",
            ...GlobalStyles.center,
            width: "100%",
            ...GlobalStyles.SpaceBetween,
            padding: "0 15pc",
          }}
        >

          <div
            style={{
              display: "flex",
              gap: "0.2pc",
              flexDirection: "column",
              // border: "1px solid red",
              width: "19pc",
              paddingTop:'2pc',
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6pc",
              }}
            >
              <h2>Medical App</h2>
              <Logo color={"#fff"} widthSvg={"2pc"} colorHover={"red"} />
            </div>
            <p>©2024 - MedicalApp.</p>
            <p>Todos los derechos reservados.</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6pc",
              }}
            >
              <ReactIcon />
              <Facebook />
              <YouTube color={"#fff"} width={2} />
            </div>
          </div>
          <div style={GlobalStyles.colum}>
            <ColombiaVida />
            <ColombiaGov />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
