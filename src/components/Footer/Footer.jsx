import React, { useContext, useEffect } from "react";
import { GlobalStyles } from "../../styles/GlobalStyles";
import Styles from "../../pages/Login/Styles";
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

import Logo from "../../components/Logo";

const Footer = () => {
  return (
    <div style={Styles.containerPages1}>
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
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6pc",
              }}
            >
              <h2>MedicalApp</h2>
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

export default Footer
