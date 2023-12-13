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
  const [reset, setReset] = useState(false);
  const {
    workers,
    workersWithLicense,
    getWorkersAsync,
    getWorkersWithLicenseAsync,
    createWorkerLicense,
    updateWorkerLicense,
    resetLicenseForWorkerAsync,
    searchWorker,
  } = useStore();

  useEffect(() => {
    getWorkersAsync();
    getWorkersWithLicenseAsync();
  }, [reset, getWorkersAsync, getWorkersWithLicenseAsync]);
  return (
    <div className="grid grid-cols-2 h-4/5">
      <WorkerListToAddLicense
        workersData={workers}
        setToggleForm={setToggleForm}
        setWorkerToAddLicense={setWorkerToAddLicense}
        reset={reset}
        setReset={setReset}
        setSearchWorker={searchWorker}
      />
      {toggleForm ? (
        <LicenseForm
          workerToAddLicense={workerToAddLicense}
          workerWithLicenseToEdit={workerWithLicenseToEdit}
          toggleCreateOrEdit={toggleCreateOrEdit}
          setToggleCreateOrEdit={setToggleCreateOrEdit}
          createWorkerLicense={createWorkerLicense}
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
