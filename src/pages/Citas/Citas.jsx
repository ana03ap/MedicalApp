import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Card from "../../components/Card/Card";
import Nav from "../../components/Nav/index";
import '../Citas/index.css'
import '../../../src/index.css'
import FormPpl from "../../components/Formulario/FormPpl";
const Citas = () => {
  const { data, isMobileDevice } = useContext(AppContext);
  console.log("hola");

  return (
    <>

    <Nav/>
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
          backgroundImage: "url('../../../public/img/citas1.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "white",
          height: "40vh",
          width:'100%',
          display: "flex",
      
          alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
          
        }}
      >
        <h2>TU AGENDA, TU SALUD</h2>
        <p>
          Mantén el control de tus citas. ¡Cuidamos cada
          momento de tu bienestar emocional!
        </p>
      </div>
<div className="available">
<h2>Nuestros psicólogos disponibles</h2>

<div id="botomnes-filtro">

  <button>Psicodinamica</button>
  <button>Cognitiva</button>
  <button>Psicoanalisis</button>
  <button>Humanista</button>
  <button>TCC</button>
  <button>Psicodinamica</button>
  <button>Sistemico</button>
  <button>AC</button>
  <button>interpersonal</button>
</div>

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
  <FormPpl/>
</div>
    </div>
    </>
   
  );
};

export default Citas;
