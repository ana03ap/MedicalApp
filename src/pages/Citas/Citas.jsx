import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Card from "../../components/Card/Card";
import Nav from "../../components/Nav/index";
import "../Citas/index.css";
import "../../../src/index.css";
import FormPpl from "../../components/Formulario/FormPpl";
import { AuthContext } from "../../context/AuthContext";
import Carrito from "../Carrito/Carrito";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
const Citas = () => {
  const navigate = useNavigate();

  const { userGoogleData, isLogin2 } = useContext(AuthContext); // vaina pa traerme lo del login

  const { data } = useContext(AppContext);
  console.log("en citas");

  const location = useLocation();
  if (location.pathname == "/Citas") {
    if (isLogin2 == false) {
      navigate("/Login")
    }
  }
  return (
    <>
      <Nav />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#ffff",
        }}
      >
        <div
          style={{
            backgroundImage: "url('../../../img/citas1.jpg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "white",
            height: "40vh",
            width: "100%",
            display: "flex",

            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h2>TU AGENDA, TU SALUD</h2>
          <p>
            Mantén el control de tus citas. ¡Cuidamos cada momento de tu
            bienestar emocional!
          </p>
        </div>
        <div className="available font-bold">
          <h2
            style={{
              fontSize: "2pc",
            }}
          >
            Nuestros psicólogos disponibles
          </h2>

          <div className="ContainerCard">
            {data.map((item) => (
              <Card
                id={item.id}
                name={item.name}
                profession={item.profession}
                imagen={item.image}
                nationality={item.nationality.name}
                flag={item.nationality.photo}
                qualification={item.qualification}
              />
            ))}
          </div>
        </div>

        <div id="form-citas">
          {/* <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={navigate("/Carrito")}
          >
            Pagar sus citas aquí!{" "}
          </button> */}
          <FormPpl />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Citas;
