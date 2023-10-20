import { useState } from "react";
import ReactPaginate from "react-paginate";

const PaginatedItems = ({ itemsPerPage, workersData }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = workersData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(workersData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % workersData.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <ul className="text-white grid grid-rows-5 gap-4 px-5">
        {currentItems?.map((worker) => (
          <li className="grid grid-cols-3 gap-4 w-workerList" key={worker.id}>
            <h2 className="py-1">
              {worker.name} {worker.lastName}
            </h2>
            <button className="bg-primary-middle text-white rounded-xl px-3 py-1 hover:bg-primary-dark hover:drop-shadow-md">
              borrar
            </button>
            <button className="bg-secondary-middle text-white rounded-xl px-3 py-1 hover:bg-secondary-dark hover:drop-shadow-md">
              editar
            </button>
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

export default PaginatedItems;
