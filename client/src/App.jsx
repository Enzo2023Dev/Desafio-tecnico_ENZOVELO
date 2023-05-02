import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: 
        <div className="alert flex justify-center items-center h-screen">
          <h1 className="font-bold text-2xl text-white bg-red-500 px-4 py-2">Error</h1>
          <div className="bg-red-100 px-4 py-3 text-red-700">
            <p>La ruta no existe</p>
          </div>
        </div>
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/home",
      element: <Home />
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
