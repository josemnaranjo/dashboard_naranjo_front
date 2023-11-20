import WorkerListToAddLicense from "../components/WorkerListToAddLicense";
import WorkerListWithLicense from "../components/WorkerListWithLicense";

const TyvLicencias = () => {
  const workersData = [
    {
      id: 1,
      name: "Prueba",
      lastName: "Uno",
    },
    {
      id: 2,
      name: "Prueba",
      lastName: "Dos",
    },
    {
      id: 3,
      name: "Prueba",
      lastName: "Tres",
    },
    {
      id: 4,
      name: "Prueba",
      lastName: "Cuatro",
    },
    {
      id: 5,
      name: "Prueba",
      lastName: "Cinco",
    },
    {
      id: 6,
      name: "Prueba",
      lastName: "Seis",
    },
  ];

  return (
    <div className="grid grid-cols-2 h-4/5">
      <WorkerListToAddLicense workersData={workersData} />
      <WorkerListWithLicense />
    </div>
  );
};

export default TyvLicencias;
