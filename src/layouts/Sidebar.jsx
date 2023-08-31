import { Link } from "react-router-dom";
import {
  BsPeople,
  BsPlusCircle,
  BsTruck,
  BsCalendarWeek,
  BsBook,
  BsArrowRight,
  BsArrowLeft,
  BsJournal,
} from "react-icons/bs";
const Sidebar = () => {
  return (
    <div className="bg-secondary-dark text-white text-base h-screen rounded-r-2xl grid grid-rows-2 place-content-center place-items-center drop-shadow-sidebar">
      <div className="grid grid-rows-4">
        <Link
          to="/tyv-general"
          className="flex justify-center items-center font-bold"
        >
          <BsPeople className="w-14 h-12" />
          <h1 className="pl-1">trabajadores y vehículos</h1>
        </Link>

        <Link
          to="/tyv-trabajadores"
          className="flex justify-center items-center hover:text-primary-dark hover:drop-shadow-lg "
        >
          <BsPlusCircle className="w-10 h-4" />
          <h1>agregar trabajadores</h1>
        </Link>

        <Link
          to="/tyv-licencias"
          className="flex justify-center items-center hover:text-primary-dark hover:drop-shadow-lg  "
        >
          <BsCalendarWeek className="w-9 h-4" />
          <h1>licencias médicas</h1>
        </Link>

        <Link
          to="/tyv-vehiculos"
          className="flex justify-center items-center hover:text-primary-dark hover:drop-shadow-lg "
        >
          <BsTruck className="w-9 h-4" />
          <h1>agregar vehículos</h1>
        </Link>
      </div>

      <div className="grid grid-rows-4">
        <Link
          to="/asistencia-general"
          className="flex justify-center items-center font-bold"
        >
          <BsBook className="w-14 h-12" />
          <h1 className="pl-1">asistencias</h1>
        </Link>

        <Link
          to="/asistencia-entrada"
          className="flex justify-center items-center hover:text-primary-dark hover:drop-shadow-lg "
        >
          <BsArrowRight className="w-10 h-4" />
          <h1>entrada</h1>
        </Link>

        <Link
          to="/asistencia-salida"
          className="flex justify-center items-center hover:text-primary-dark hover:drop-shadow-lg  "
        >
          <BsArrowLeft className="w-9 h-4" />
          <h1>salida</h1>
        </Link>

        <Link
          to="/asistencia-informe-general"
          className="flex justify-center items-center hover:text-primary-dark hover:drop-shadow-lg "
        >
          <BsJournal className="w-9 h-4" />
          <h1>informes</h1>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
