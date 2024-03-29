
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextProvider } from "./Components/utils/global.context";


function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;


//este texto es para identificar que esta es la ubicacion 
//y el proyecto correcto a subir de carlos clavijo 
//prueba repo push charlie070102
