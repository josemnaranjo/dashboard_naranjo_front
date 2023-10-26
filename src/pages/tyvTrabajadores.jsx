import { useEffect, useState } from "react";
import useStore from "../store/workerStore.js";
import WorkersList from "../components/WorkersList";
import NewWorkerForm from "../components/NewWorkerForm";

const TyvTrabajadores = () => {
  const { workers, getWorkersAsync, addWorkerAsync } = useStore();
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
        handleSubmit={addWorkerAsync}
        workerToUpdate={workerToUpdate}
      />
    </div>
  );
};

export default TyvTrabajadores;
