import axios from "axios";
import { useEffect, useState } from "react";

function home() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/usuarios").then((responde) => {
      setUsuarios(responde.data);
    });
  }, []);

  return (
    <>
      <div>

        {usuarios.map((value, key) => {
          return (
            
            
            <div className="relative overflow-x-auto justify-center flex flex-1">
              <table className="w-32 text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                  <tr>
                    <th scope="col" className="px-6 py-3">Nombre</th>
                    <th scope="col" className="px-6 py-3">Apellido</th>
                    <th scope="col" className="px-6 py-3">Email</th>
                    <th scope="col" className="px-6 py-3">Contraseña</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td scope="row" className="px-6 py-4">{value.nombre}</td>
                    <td className="px-6 py-4">{value.apellido}</td>
                    <td className="px-6 py-4">{value.email}</td>
                    <td className="px-6 py-4">{value.contraseña}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default home;