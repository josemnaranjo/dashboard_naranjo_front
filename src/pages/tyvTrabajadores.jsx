import { useEffect } from "react";
import { useStore } from "../store/workerStore.js";
import WorkersList from "../components/WorkersList";
import NewWorkerForm from "../components/NewWorkerForm";

const TyvTrabajadores = () => {
  const { workers, getWorkersAsync } = useStore();

  useEffect(() => {
    getWorkersAsync();
  }, []);

  return (
    <div className="grid grid-cols-2 h-4/5">
      <WorkersList workersData={workers} />
      <NewWorkerForm />
    </div>
  );
};

export default TyvTrabajadores;
