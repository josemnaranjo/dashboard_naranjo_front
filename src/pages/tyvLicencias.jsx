import { useEffect, useState } from "react";
import WorkerListToAddLicense from "../components/WorkerListToAddLicense";
import WorkerListWithLicense from "../components/WorkerListWithLicense";
import LicenseForm from "../components/LicenseForm";
import useStore from "../store/workerStore";

const TyvLicencias = () => {
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleCreateOrEdit, setToggleCreateOrEdit] = useState(true);
  const [workerToAddLicense, setWorkerToAddLicense] = useState();
  const [workerWithLicenseToEdit, setWorkerWithLicenseToEdit] = useState();
  const {
    workers,
    workersWithLicense,
    getWorkersAsync,
    getWorkersWithLicenseAsync,
    updateWorkerLicense,
    resetLicenseForWorkerAsync
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
        <LicenseForm
          workerToAddLicense={workerToAddLicense}
          workerWithLicenseToEdit={workerWithLicenseToEdit}
          toggleCreateOrEdit={toggleCreateOrEdit}
          setToggleCreateOrEdit={setToggleCreateOrEdit}
          updateWorkerLicense={updateWorkerLicense}
          setToggleForm={setToggleForm}
        />
      ) : (
        <WorkerListWithLicense
          workersWithLicenseData={workersWithLicense}
          setToggleCreateOrEdit={setToggleCreateOrEdit}
          setWorkerWithLicenseToEdit={setWorkerWithLicenseToEdit}
          setToggleForm={setToggleForm}
          resetLicenseForWorkerAsync={resetLicenseForWorkerAsync}
        />
      )}
    </div>
  );
};

export default TyvLicencias;
