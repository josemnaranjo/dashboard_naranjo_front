import { BsSearch } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";

import PaginatedItems from "./PaginatedItems";
import { useState } from "react";

const WorkersList = ({
  workersData,
  setWorkerToUpdate,
  setSearchWorker,
  reset,
  setReset,
}) => {
  const [worker, setWorker] = useState();
  const [showReset, setShowReset] = useState(false);
  return (
    <div className="bg-gray-300 rounded-xl flex flex-col justify-center gap-10">
      <div className="flex justify-center items-center gap-2">
        <input
          type="text"
          className="rounded-lg px-3 w-80 h-7"
          placeholder="buscar por apellido"
          onChange={(e) => {
            setWorker(e.target.value);
          }}
        />
        <button
          className="rounded-full border-2 p-1.5 hover:drop-shadow-xl"
          onClick={() => {
            setSearchWorker(worker);
            setShowReset(true);
          }}
        >
          <BsSearch className="text-white w-3 h-3" />
        </button>
        {showReset && (
          <button
            className="rounded-full border-2 p-1.5 hover:drop-shadow-xl"
            onClick={() => {
              setReset(!reset);
              setShowReset(false);
            }}
          >
            <BsArrowRepeat className="text-white w-3 h-3" />
          </button>
        )}
      </div>
      <PaginatedItems
        workersData={workersData}
        itemsPerPage={5}
        setWorkerToUpdate={setWorkerToUpdate}
      />
    </div>
  );
};

export default WorkersList;
