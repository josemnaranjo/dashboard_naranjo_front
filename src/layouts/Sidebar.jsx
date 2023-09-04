import { Link } from "react-router-dom";
import {
  BsPlusCircle,
  BsTruck,
  BsCalendarWeek,
  BsArrowRight,
  BsArrowLeft,
  BsJournal,
} from "react-icons/bs";
import Logoempresa from "../assets/images/LogoEmpresa.png";

const Sidebar = () => {
  return (
    <div className="bg-secondary-dark text-white text-base h-screen rounded-br-xl rounded-tr-lg drop-shadow-sidebar flex flex-col gap-12">
      <div className="bg-primary-dark rounded-tr-lg rounded-bl-lg p-3 drop-shadow-lg">
        <img src={Logoempresa} alt="logo empresa" className="mt-2 ml-2 w-5/6" />
      </div>

      <div className="grid grid-rows-4 gap-2">
        <Link to="/tyv-general" className=" text-center font-bold">
          <h1 className="pl-1 hover:underline hover:underline-offset-2 xl:text-ellipsis">
            trabajadores y vehículos
          </h1>
        </Link>

        <Link
          to="/tyv-trabajadores"
          className="flex items-center pl-5 hover:text-primary-dark hover:drop-shadow-lg "
        >
          <BsPlusCircle className="h-5 w-6" />
          <h1 className="ml-2">agregar trabajadores</h1>
        </Link>

        <Link
          to="/tyv-licencias"
          className="flex items-center pl-5 hover:text-primary-dark hover:drop-shadow-lg  "
        >
          <BsCalendarWeek className="h-5 w-6" />
          <h1 className="ml-2">licencias médicas</h1>
        </Link>

        <Link
          to="/tyv-vehiculos"
          className="flex items-center pl-5 hover:text-primary-dark hover:drop-shadow-lg "
        >
          <BsTruck className="h-5 w-6" />
          <h1 className="ml-2">agregar vehículos</h1>
        </Link>
      </div>

      <div className="grid grid-rows-4 gap-2">
        <Link to="/asistencia-general" className="text-center font-bold">
          <h1 className="pl-1 hover:underline hover:underline-offset-2">
            asistencias
          </h1>
        </Link>

        <Link
          to="/asistencia-entrada"
          className="flex items-center pl-5 hover:text-primary-dark hover:drop-shadow-lg"
        >
          <BsArrowRight className="h-5 w-6" />
          <h1 className="ml-2">entrada</h1>
        </Link>

        <Link
          to="/asistencia-salida"
          className="flex items-center pl-5 hover:text-primary-dark hover:drop-shadow-lg  "
        >
          <BsArrowLeft className="h-5 w-6" />
          <h1 className="ml-2">salida</h1>
        </Link>

        <Link
          to="/asistencia-informe-general"
          className="flex items-center pl-3 hover:text-primary-dark hover:drop-shadow-lg "
        >
          <BsJournal className="h-4 w-9" />
          <h1 className="ml-1">informes</h1>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
