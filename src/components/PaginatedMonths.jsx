import { useState } from "react";
import ReactPaginate from "react-paginate";

const PaginatedMonths = ({
  monthsData,
  itemsPerPage,
  navigate,
}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = monthsData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(monthsData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % monthsData.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <ul className="flex flex-col gap-5 relative">
        {currentItems?.map((month) => (
          <li
            key={month.key}
            className="bg-gray-300 text-white rounded-lg border border-black flex justify-around py-5 px-2 drop-shadow-lg"
          >
            <h2 className="w-24">{month.month}</h2>
            <button
              className="bg-primary-middle hover:bg-primary-dark hover:drop-shadow-md rounded-lg px-2 text-lg border border-black"
              onClick={() => {
                navigate(`informe-visual/${month.key}`);
              }}
            >
              ver informe
            </button>
            <button className="bg-secondary-middle hover:bg-secondary-dark hover:drop-shadow-md rounded-lg px-2 text-lg border border-black">
              descargar informe
            </button>
          </li>
        ))}
      </ul>
      <ReactPaginate
        nextLabel=">"
        previousLabel="<"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        className="w-96 mx-auto mt-14 flex justify-center gap-4 text-white bg-gray-300 rounded-lg border border-black"
        previousLinkClassName="hover:text-primary-dark"
        nextLinkClassName="hover:text-primary-dark"
        activeClassName="text-primary-dark underline"
      />
    </div>
  );
};

export default PaginatedMonths;
