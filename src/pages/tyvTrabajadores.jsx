import { useEffect, useState } from "react";
import useStore from "../store/workerStore.js";
import WorkersList from "../components/WorkersList";
import NewWorkerForm from "../components/NewWorkerForm";

const TyvTrabajadores = () => {
  const {
    workers,
    getWorkersAsync,
    addWorkerAsync,
    updateWorkerAsync,
    searchWorker,
  } = useStore();

  const [workerToUpdate, setWorkerToUpdate] = useState({
    name: "",
    lastName: "",
    rut: "",
  });

  const [reset, setReset] = useState(false); //reseteo para cuando se termine de buscar a un trabajador

  useEffect(() => {
    getWorkersAsync();
  }, [reset]);

  return (
    <div className="grid grid-cols-2 h-4/5">
      <WorkersList
        workersData={workers}
        setWorkerToUpdate={setWorkerToUpdate}
        setSearchWorker={searchWorker}
        reset={reset}
        setReset={setReset}
      />
      <NewWorkerForm
        handleSubmitCreate={addWorkerAsync}
        workerToUpdate={workerToUpdate}
        updateWorkerAsync={updateWorkerAsync}
      />
    </div>
  );
};

export default TyvTrabajadores;
