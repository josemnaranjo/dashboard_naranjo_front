import { useState } from "react";
import useStore from "../store/workerStore";
import ReactPaginate from "react-paginate";
import Swal from "sweetalert2";

const PaginatedItems = ({ itemsPerPage, workersData, setWorkerToUpdate }) => {
  const { deleteWorkerAsync } = useStore();

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
        {currentItems?.map((worker) =>
          worker.mensaje ? (
            <li key={worker.mensaje.id}>
              <h1 className="py-1">El trabajador no se encuentra en la base de datos</h1>
            </li>
          ) : (
            
            <li className="grid grid-cols-3 gap-7 w-workerList" key={worker.id}>
              <h2 className="py-1 line-clamp-1" title={worker.lastName}>
                {worker.name} {worker.lastName}
              </h2>
              <button
                className="bg-primary-middle text-white rounded-xl  hover:bg-primary-dark hover:drop-shadow-md"
                onClick={() =>
                  Swal.fire({
                    text: "¿Estas seguro de eliminar a este trabajador?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "confirmar",
                    cancelButtonText: "cancelar",
                    color: "#fff",
                    background: "#374be5",
                    confirmButtonColor: "#E1BF1A",
                    cancelButtonColor: "#b8b6b6",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      deleteWorkerAsync(worker.rut);
                      Swal.fire({
                        color: "#fff",
                        background: "#374be5",
                        text: "Trabajador eliminado",
                        icon: "success",
                      });
                    }
                  })
                }
              >
                borrar
              </button>
              <button
                className="bg-secondary-middle text-white rounded-xl  hover:bg-secondary-dark hover:drop-shadow-md"
                onClick={() =>
                  setWorkerToUpdate({
                    name: worker.name,
                    lastName: worker.lastName,
                    rut: worker.rut,
                    toUpdate: true,
                    id: worker.id,
                  })
                }
              >
                editar
              </button>
            </li>
          )
        )}
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
