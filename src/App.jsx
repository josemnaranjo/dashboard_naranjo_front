import "./App.css";
import Home from "/src/pages/home";
import AsistEntrada from "/src/pages/asistEntrada";
import AsistInformeGeneral from "/src/pages/asistInformeGeneral";
import AsistInformeVisual from "../src/pages/asistInformeVisual";
import AsistPrincipal from "../src/pages/asistPrincipal";
import AsistSalida from "../src/pages/asistSalida";
import TyVLicencias from "../src/pages/tyvLicencias";
import TyVPrincipal from "../src/pages/tyvPrincipal";
import TyVTrabajadores from "../src/pages/tyvTrabajadores";
import TyVVehiculos from "../src/pages/tyvVehiculos";
import User from "../src/pages/user";
import { UserProvider } from "../src/context/userContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="grid h-screen place-items-center ">
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/asistencia-entrada" element={<AsistEntrada />} />
          <Route
            path="/asistencia-informe-general"
            element={<AsistInformeGeneral />}
          />
          <Route
            path="/asistencia-informe-visual"
            element={<AsistInformeVisual />}
          />
          <Route path="/asistencia-general" element={<AsistPrincipal />} />
          <Route path="/asistencia-salida" element={<AsistSalida />} />
          <Route path="/tyv-licencias" element={<TyVLicencias />} />
          <Route path="/tyv-general" element={<TyVPrincipal />} />
          <Route path="/tyv-trabajadores" element={<TyVTrabajadores />} />
          <Route path="/tyv-vehiculos" element={<TyVVehiculos />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
