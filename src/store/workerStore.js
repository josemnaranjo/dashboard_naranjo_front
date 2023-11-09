import { create } from "zustand";
import {
  getAllWorkers,
  deleteWorker,
  createWorker,
  updateWorker,
} from "../api/workers.services";
import { devtools } from "zustand/middleware";
import Swal from "sweetalert2";

const useStore = create(
  devtools((set) => ({
    workers: [],
    getWorkersAsync: async () => {
      try {
        const response = await getAllWorkers();
        set({
          workers: response.data,
        });
      } catch (err) {
        alert(
          "Error con la base de datos. No se pudo recuperar la información solicitada"
        );
      }
    },
    deleteWorkerAsync: async (rut) => {
      try {
        const response = await deleteWorker(rut);
        const mensaje = response.data.mensaje;
        if (mensaje === "Trabajador eliminado de la base de datos") {
          set((state) => ({
            ...state,
            workers: state.workers.filter((worker) => worker.rut !== rut),
          }));
        } else {
          alert("No se pudo borra al trabajador solicitado");
        }
      } catch (err) {
        alert(
          "Error con la base de datos. No se pudo borra al trabajador solicitado"
        );
      }
    },
    addWorkerAsync: async (worker) => {
      try {
        const response = await createWorker(worker);
        if (response.data.mensaje === "Trabajador creado exitosamente") {
          const workerData = response.data.newWorker;
          set((state) => ({ workers: [...state.workers, workerData] }));
          Swal.fire({
            icon: "success",
            text: "Trabajador creado con éxito",
            background: "#374be5",
            color: "#fff",
          });
        }
        if (response.data.mensaje === "Trabajador restaurado exitosamente") {
          const newWorkers = await getAllWorkers();
          set({ workers: newWorkers.data });
          Swal.fire({
            icon: "success",
            text: "Trabajador creado con éxito",
            background: "#374be5",
            color: "#fff",
          });
        }
      } catch (err) {
        alert(
          "Error con la base de datos. No se pudo crear el trabajador solicitado"
        );
      }
    },
    updateWorkerAsync: async (worker) => {
      try {
        const response = await updateWorker(worker);

        if (response.data.mensaje === "Datos del trabajador actualizados") {
          const { name, lastName, id } = worker;
          set((state) =>
            state.workers.map((worker) => {
              if (worker.id === id) {
                (worker.name = name), (worker.lastName = lastName);
              } else {
                worker;
              }
            })
          );
        }
      } catch (err) {
        alert(
          "Error en la base de datos. No se pudo actualizar los datos del trabajador"
        );
      }
    },
    searchWorker: (data) => {
      set((state) => {
        const filteredWorkers = state.workers.filter(
          (worker) => worker.lastName === data
        );
        if (filteredWorkers.length !== 0) {
          return { ...state, workers: filteredWorkers };
        } else {
          return {
            ...state,
            workers: [
              { mensaje: "no se encontraron trabajadores", mensajeid: 0 },
            ],
          };
        }
      });
    },
  }))
);

export default useStore;
