import { useState } from "react";
import ReactPaginate from "react-paginate";

const PaginatedWorkersWithLicense = ({
  workersWithLicenseData,
  itemsPerPage,
}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = workersWithLicenseData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(workersWithLicenseData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % workersWithLicenseData.length;
    setItemOffset(newOffset);
  };
  return (
    <div>
      <ul className="text-white grid grid-rows-2 gap-2 mt-4 justify-center">
        {currentItems?.map((worker) => (
          <li
            className="grid grid-rows-4 justify-center p-4 rounded-xl border-2 border-gray-200 bg-gray-400"
            key={worker.id}
          >
            <h2 className="py-1 line-clamp-1" title={worker.lastName}>
              {worker.name} {worker.lastName}
            </h2>
            <h2>Fecha inicio: {worker.licenceStarDate}</h2>
            <h2>Fecha termino: {worker.licenceEndDate}</h2>
            <div className="flex justify-around">
              <button className="w-20 bg-primary-middle text-white rounded-xl  hover:bg-primary-dark hover:drop-shadow-md">
                borrar
              </button>
              <button className="w-20 bg-secondary-middle text-white rounded-xl  hover:bg-secondary-dark hover:drop-shadow-md focus:ring focus:ring-primary-middle">
                editar
              </button>
            </div>
          </li>
        ))}
      </ul>
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
    </div>
  );
};

export default PaginatedWorkersWithLicense;
