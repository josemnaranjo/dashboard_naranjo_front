import PaginatedWorkersToLicense from "./PaginatedWorkersToLicense";

const WorkerListToAddLicense = ({ workersData }) => {
  return (
    <div className="bg-gray-300 rounded-xl flex flex-col justify-center gap-10 border-2 border-gray-400">
      <div className="flex justify-center items-center gap-2">
        <h1>Hola</h1>
      </div>
      <PaginatedWorkersToLicense workersData={workersData} itemsPerPage={5} />
    </div>
  );
};

export default WorkerListToAddLicense;
