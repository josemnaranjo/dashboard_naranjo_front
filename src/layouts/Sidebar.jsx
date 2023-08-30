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
    <div className="bg-secondary-dark text-white text-base h-screen rounded-r-2xl grid grid-rows-2 place-content-center place-items-center px-4">
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

      <div>
        <h1>Subtitulo 2</h1>
      </div>
    </div>
  );
};

export default Sidebar;
