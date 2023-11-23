import { useEffect } from "react";
import WorkerListToAddLicense from "../components/WorkerListToAddLicense";
import WorkerListWithLicense from "../components/WorkerListWithLicense";
import LicenseForm from "../components/LicenseForm";
import useStore from "../store/workerStore";

const TyvLicencias = () => {
  const { workers, workersWithLicense, getWorkersAsync, getWorkersWithLicenseAsync } = useStore();

  const toggleForm = false;

  useEffect(() => {
    getWorkersAsync();
    getWorkersWithLicenseAsync()
  }, []);
  return (
    <div className="grid grid-cols-2 h-4/5">
      <WorkerListToAddLicense workersData={workers} />
      {toggleForm ? (
        <LicenseForm />
      ) : (
        <WorkerListWithLicense workersWithLicenseData={workersWithLicense} />
      )}
    </div>
  );
};

export default TyvLicencias;
