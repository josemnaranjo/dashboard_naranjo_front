import { BsSearch } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";
import PaginatedWorkersToLicense from "./PaginatedWorkersToLicense";

const WorkerListToAddLicense = ({ workersData, setToggleForm }) => {
  return (
    <div className="bg-gray-300 rounded-xl flex flex-col justify-center gap-10 border-2 border-gray-400">
      <div className="flex justify-center items-center gap-2">
      <input
          type="text"
          className="rounded-lg px-3 w-80 h-7"
          placeholder="buscar por apellido"
        />
        <button
          className="rounded-full border-2 p-1.5 hover:drop-shadow-xl"
        >
          <BsSearch className="text-white w-3 h-3" />
        </button>
        {/* {showReset && (
          <button
            className="rounded-full border-2 p-1.5 hover:drop-shadow-xl"
            onClick={() => {
              setReset(!reset);
              setShowReset(false);
              setWorker("");
              inputRef.current.value = "";
            }}
          >
            <BsArrowRepeat className="text-white w-3 h-3" />
          </button>
        )} */}
      </div>
      <PaginatedWorkersToLicense workersData={workersData} itemsPerPage={5} setToggleForm={setToggleForm} />
    </div>
  );
};

export default WorkerListToAddLicense;
