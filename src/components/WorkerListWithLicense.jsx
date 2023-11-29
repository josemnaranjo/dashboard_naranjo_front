import PaginatedWorkersWithLicense from "./PaginatedWorkersWithLicense";
const WorkerListWithLicense = ({ workersWithLicenseData, setToggleCreateOrEdit,setToggleForm,setWorkerWithLicenseToEdit }) => {
  return (
    <div className="bg-gray-300 text-white container mx-auto w-96 py-10 h-full rounded-xl flex flex-col justify-around items-center border-2 border-gray-400">
      <div>
        <h1 className="text-xl underline underline-offset-8">trabajadores con licencia</h1>
      </div>
      <PaginatedWorkersWithLicense
        workersWithLicenseData={workersWithLicenseData}
        itemsPerPage={2}
        setToggleCreateOrEdit={setToggleCreateOrEdit}
        setToggleForm={setToggleForm}
        setWorkerWithLicenseToEdit={setWorkerWithLicenseToEdit}
      />
    </div>
  );
};

export default WorkerListWithLicense;
