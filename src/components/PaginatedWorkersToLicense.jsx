import { useState } from "react";
import ReactPaginate from "react-paginate";

const PaginatedWorkersToLicense = ({
  itemsPerPage,
  workersData,
  setToggleForm,
  setWorkerToAddLicense,
}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = workersData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(workersData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % workersData.length;
    setItemOffset(newOffset);
  };

  const handleToggleForm = () => {
    setToggleForm(true);
  };
  const handleWorkerToAddlicense = (data) => {
    setWorkerToAddLicense(data);
  };
  return (
    <div>
      <ul className="text-white grid gap-2 px-5">
        {currentItems?.map((worker) => (
          <li className="grid grid-cols-2 gap-4" key={worker.id}>
            <h2 className="py-1 line-clamp-1" title={worker.lastName}>
              {worker.name} {worker.lastName}
            </h2>
            <button
              className="bg-secondary-middle
               text-white rounded-xl  
               hover:bg-secondary-dark 
                 hover:drop-shadow-md
               disabled:bg-gray-400/50 
               disabled:border 
               disabled:border-white 
               disabled:hover:bg-gray-400/50 
               disabled:hover:drop-shadow-none"
              onClick={() => {
                handleToggleForm();
                handleWorkerToAddlicense(worker);
              }}
              disabled={worker.workerHasLicence}
            >
              {worker.workerHasLicence
                ? "trabajador con licencia"
                : "agregar licencia"}
            </button>
          </li>
        ))}
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          className="w-96 mx-auto mt-14 flex justify-center gap-4 text-white"
          previousLinkClassName="hover:text-primary-dark"
          nextLinkClassName="hover:text-primary-dark"
          activeClassName="text-primary-dark underline"
        />
      </ul>
    </div>
  );
};

export default PaginatedWorkersToLicense;
