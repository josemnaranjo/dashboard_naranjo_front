import { useEffect, useState } from "react";
import WorkerListToAddLicense from "../components/WorkerListToAddLicense";
import WorkerListWithLicense from "../components/WorkerListWithLicense";
import LicenseForm from "../components/LicenseForm";
import useStore from "../store/workerStore";

const TyvLicencias = () => {
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleCreateOrEdit, setToggleCreateOrEdit] = useState(true);
  const [workerToAddLicense, setWorkerToAddLicense] = useState();
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
      <WorkerListToAddLicense
        workersData={workers}
        setToggleForm={setToggleForm}
        setWorkerToAddLicense={setWorkerToAddLicense}
      />
      {toggleForm ? (
        <LicenseForm workerToAddLicense={workerToAddLicense} toggleCreateOrEdit={toggleCreateOrEdit}  />
      ) : (
        <WorkerListWithLicense workersWithLicenseData={workersWithLicense} setToggleCreateOrEdit={setToggleCreateOrEdit} setToggleForm={setToggleForm} />
      )}
    </div>
  );
};

export default TyvLicencias;
