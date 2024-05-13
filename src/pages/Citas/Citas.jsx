import React, { useContext } from "react";
import useForm from '../../hook/useForm'
import {AppContext} from '../../context/AppContext'
import Card from '../../components/Card/Card'
const Citas = () => {
  const { data, isMobileDevice } = useContext(AppContext);
  console.log("hola")
  
  return (



    
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#ffff",
      }}
    >


<div>
  <p>hola</p>
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
  );




}

export default Citas