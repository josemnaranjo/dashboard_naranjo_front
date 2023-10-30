import { useEffect, useState } from "react";
import useStore from "../store/workerStore.js";
import WorkersList from "../components/WorkersList";
import NewWorkerForm from "../components/NewWorkerForm";

const TyvTrabajadores = () => {
  const { workers, getWorkersAsync, addWorkerAsync, updateWorkerAsync } =
    useStore();
  const [workerToUpdate, setWorkerToUpdate] = useState({
    name: "",
    lastName: "",
    rut: "",
  });

  useEffect(() => {
    getWorkersAsync();
  }, []);

  return (
    <div className="grid grid-cols-2 h-4/5">
      <WorkersList
        workersData={workers}
        setWorkerToUpdate={setWorkerToUpdate}
      />
      <NewWorkerForm
        handleSubmitCreate={addWorkerAsync}
        workerToUpdate={workerToUpdate}
        handleSubmitUpdate={updateWorkerAsync}
      />
    </div>
  );
};

export default TyvTrabajadores;
