import { useEffect } from "react";
import WorkerListToAddLicense from "../components/WorkerListToAddLicense";
import WorkerListWithLicense from "../components/WorkerListWithLicense";
import LicenseForm from "../components/LicenseForm";
import useStore from "../store/workerStore";

const TyvLicencias = () => {
  const { workers, getWorkersAsync } = useStore();


  const workersWithLicenseData = [
    {
      id: 1,
      name: "Prueba",
      lastName: "Uno",
      licenceStarDate: null,
      licenceEndDate: null,
    },
    {
      id: 2,
      name: "Prueba",
      lastName: "Dos",
      licenceStarDate: null,
      licenceEndDate: null,
    },
    {
      id: 3,
      name: "Prueba",
      lastName: "Tres",
      licenceStarDate: null,
      licenceEndDate: null,
    },
    {
      id: 4,
      name: "Prueba",
      lastName: "Cuatro",
      licenceStarDate: null,
      licenceEndDate: null,
    },
    {
      id: 5,
      name: "Prueba",
      lastName: "Cinco",
      licenceStarDate: "01-01-2024",
      licenceEndDate: "01-10-2024",
    },
    {
      id: 6,
      name: "Prueba",
      lastName: "Seis",
      licenceStarDate: "01-20-2024",
      licenceEndDate: "01-27-2024",
    },
  ];
  const toggleForm = false;

  useEffect(() => {
    getWorkersAsync()
  }, []);
  return (
    <div className="grid grid-cols-2 h-4/5">
      <WorkerListToAddLicense workersData={workers} />
      {toggleForm ? (
        <LicenseForm />
      ) : (
        <WorkerListWithLicense
          workersWithLicenseData={workersWithLicenseData}
        />
      )}
    </div>
  );
};

export default TyvLicencias;
