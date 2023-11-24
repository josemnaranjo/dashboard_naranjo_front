import { useEffect, useState } from "react";
import WorkerListToAddLicense from "../components/WorkerListToAddLicense";
import WorkerListWithLicense from "../components/WorkerListWithLicense";
import LicenseForm from "../components/LicenseForm";
import useStore from "../store/workerStore";

const TyvLicencias = () => {
  const [toggleForm, setToggleForm] = useState(false);
  const [workerToAddLicense, setWorkerToAddLicense] = useState()
  const {
    workers,
    workersWithLicense,
    getWorkersAsync,
    getWorkersWithLicenseAsync,
  } = useStore();

  useEffect(() => {
    getWorkersAsync();
    getWorkersWithLicenseAsync();
  }, []);
  return (
    <div className="grid grid-cols-2 h-4/5">
      <WorkerListToAddLicense workersData={workers} setToggleForm={setToggleForm} setWorkerToAddLicense={setWorkerToAddLicense} />
      {toggleForm ? (
        <LicenseForm workerToAddLicense={workerToAddLicense} />
      ) : (
        <WorkerListWithLicense workersWithLicenseData={workersWithLicense} />
      )}
    </div>
  );
};

export default TyvLicencias;
