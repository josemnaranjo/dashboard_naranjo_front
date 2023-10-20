import { BsSearch } from "react-icons/bs";
import PaginatedItems from "./PaginatedItems";

const WorkersList = ({ workersData }) => {
  return (
    <div className="bg-gray-300 rounded-xl flex flex-col justify-center gap-10">
      <div className="flex justify-center items-center gap-2">
        <input
          type="text"
          className="rounded-lg px-3 w-80 h-7"
          placeholder="buscar trabajador"
        />
        <button className="rounded-full border-2 p-1.5 hover:drop-shadow-xl">
          <BsSearch className="text-white w-3 h-3" />
        </button>
      </div>
      <PaginatedItems workersData={workersData} itemsPerPage={5} />
    </div>
  );
};

export default WorkersList;
