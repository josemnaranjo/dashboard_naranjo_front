import WorkersList from "../components/WorkersList";
import NewWorkerForm from "../components/NewWorkerForm";

const TyvTrabajadores = () => {
  return (
    <div className="grid grid-cols-2 h-4/5">
      <WorkersList />
      <NewWorkerForm />
    </div>
  );
};

export default TyvTrabajadores;
