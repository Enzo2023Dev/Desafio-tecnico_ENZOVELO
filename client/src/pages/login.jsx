import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function login() {

  const [datos, setDatos] = useState({
    email: "",
    contraseña: "",
  });

  const handleInputChange = (event) =>{
    const {email , value} = event.target;
    setDatos({
      ...datos,
      [email]: value
    })
  }
  
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();

    if(!e.target.checkValidity()){
      console.log("Error");
    }else{
      let res = await axios.post("http://localhost:3000/usuarios/login", datos);
      console.log(res.data);
      navigate('/home')
    }
  }


  return (
    <>
      <div className="flex min-h-screen flex-1 justify-center px-6 py-60 lg:px-8 bg-slate-200">

        <div className="relative max-w-screen-md bg-white p-12 rounded-md shadow-xl">

          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="mt-7 font-bold text-center text-3xl leading-9 tracking-tight">Bienvenido</h1>
          </div>
          
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            
            <form className="space-y-6" onSubmit={handleSubmit} action="" method="post">

              <div>
                <label className="block text-md font-medium leading-6" htmlFor="">Email</label>

                <div className="mt-2">
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    value={datos.email["email"]}
                    className="block w-96 rounded-sm border-0 py-1.5 indent-2 bg-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"/>
                </div>
              </div>

              <div>

                <div className="flex items-center justify-between">
                  <label className="block text-md font-medium leading-6" htmlFor="">Contraseña</label>  
                </div>

                <div className="mt-2">
                    <input
                      required
                      name="pass"
                      type="password"
                      placeholder="Contraseña"
                      onChange={handleInputChange}
                      value={datos.contraseña["pass"]}
                      className="block w-96 rounded-sm border-0 py-1.5 indent-2 bg-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"/>
                  </div>

              </div>
              
              <div>
                <button  type="submit" className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Acceder</button>
              </div>

            </form>
         
            <div className="mt-6 text-center">
              <Link to={"/register"} className="font-semibold leading-6 text-sky-600 hover:text-sky-500" >Registrase</Link>
            </div>

          </div>
          
        </div>

      </div>
    </>
  )
}
  
export default login
  