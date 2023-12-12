import { useState } from "react";
import ReactPaginate from "react-paginate";
import dayjs from "dayjs";
import Swal from "sweetalert2";

const PaginatedWorkersWithLicense = ({
  workersWithLicenseData,
  itemsPerPage,
  setToggleCreateOrEdit,
  setWorkerWithLicenseToEdit,
  setToggleForm,
  resetLicenseForWorkerAsync,
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

  const handleToggleCreateOrEdit = (worker) => {
    setWorkerWithLicenseToEdit(worker);
    setToggleCreateOrEdit(false);
    setToggleForm(true);
  };
  const handleResetLicense = (rut) => {
    resetLicenseForWorkerAsync(rut);
  };
  return (
    <div>
      {currentItems.length === 0 ? (
        <h1 className="mx-10 mb-32 p-4 text-center text-xl bg-gray-500 border-2 rounded-xl drop-shadow-lg">
          actualmente no existen trabajadores con licencia
        </h1>
      ) : (
        <ul className="grid grid-rows-2 justify-center gap-2 mt-4 text-white">
          {currentItems?.map((worker) => (
            <li
              className="grid grid-rows-4 justify-center p-4 rounded-xl border-2 border-gray-200 bg-gray-400"
              key={worker.id}
            >
              <h2 className="py-1" title={worker.lastName}>
                {worker.name} {worker.lastName}
              </h2>
              <h2>
                Fecha inicio:{" "}
                {dayjs(worker.licenceStartDate).format("DD-MM-YYYY")}
              </h2>
              <h2>
                Fecha termino:{" "}
                {dayjs(worker.licenceEndDate).format("DD-MM-YYYY")}
              </h2>
              <div className="flex justify-around">
                <button
                  className="w-20 bg-primary-middle text-white rounded-xl  hover:bg-primary-dark hover:drop-shadow-md"
                  onClick={() =>
                    Swal.fire({
                      text: "¿Estas seguro de eliminar la liciencia de este trabajador?",
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
                        handleResetLicense({ rut: worker.rut });
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
                  className="w-20 bg-secondary-middle text-white rounded-xl  hover:bg-secondary-dark hover:drop-shadow-md focus:ring focus:ring-secondary-middle"
                  onClick={() => handleToggleCreateOrEdit(worker)}
                >
                  editar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

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
