import React from "react";
import Paciente from "./Paciente";

const ListaPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 mb-10 md:h-screen   ">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center ">
            Listado de Citas
          </h2>

          <p className="mt-5 text-center text-xl mb-10">
            Administra las{" "}
            <span className="text-indigo-600 font-bold  ">
              {" "}
              Citas
            </span>
          </p>
          <div className="md:h-screen w-full overflow-y-auto ">
            {pacientes.map((paciente) => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center ">No hay Citas</h2>

          <p className="mt-5 text-center text-xl mb-10">
            Comienza agregando Citas{" "}
            <span className="text-sky-600 font-bold  ">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListaPacientes;
