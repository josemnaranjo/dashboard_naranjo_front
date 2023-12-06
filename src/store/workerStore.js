import { create } from "zustand";
import {
  getAllWorkers,
  deleteWorker,
  createWorker,
  updateWorker,
  getAllWorkersWithLicense,
  updateLincenseForWorker,
  resetLicenseForWorker,
} from "../api/workers.services";
import { devtools } from "zustand/middleware";
import Swal from "sweetalert2";

const useStore = create(
  devtools((set) => ({
    workers: [],
    workersWithLicense: [],
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
        } else if (
          response.data.mensaje === "Trabajador restaurado exitosamente"
        ) {
          const newWorkers = await getAllWorkers();
          set({ workers: newWorkers.data });
          Swal.fire({
            icon: "success",
            text: "Trabajador restaurado con éxito",
            background: "#374be5",
            color: "#fff",
          });
        } else if (
          response.data.mensaje ===
          "El trabajador ya existe en la base de datos"
        ) {
          const newWorkers = await getAllWorkers();
          set({ workers: newWorkers.data });
          Swal.fire({
            icon: "error",
            text: "El trabajador ya existe en la base de datos",
            background: "#374be5",
            color: "#fff",
          });
        }
      } catch (err) {
        const dataError = err.response.data;
        console.log(dataError);
        Swal.fire({
          icon: "error",
          text: "El rut ya existe en la base de datos.",
          background: "#374be5",
          color: "#fff",
        });
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
          Swal.fire({
            icon: "success",
            text: "Trabajador editado con éxito",
            background: "#374be5",
            color: "#fff",
          });
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
          Swal.fire({
            icon: "warning",
            text: "El trabajador no existe en la base de datos",
            background: "#374be5",
            color: "#fff",
          });
          return { ...state };
        }
      });
    },
    getWorkersWithLicenseAsync: async () => {
      try {
        const response = await getAllWorkersWithLicense();
        set({ workersWithLicense: response.data });
      } catch (error) {
        alert(
          "Error en la base de datos. No se pudo recuperar la información solicitada"
        );
      }
    },
    createWorkerLicense: async (rut, licenseData) => {
      try {
        const response = await updateLincenseForWorker(rut, licenseData);
        if (
          response.data.message ===
          "Inicio y termino de licencia médica actualizada"
        ) {
          const worker = response.data.workerWithLicense[0];
          set((state) => ({
            workersWithLicense: [...state.workersWithLicense, worker],
          }));
          Swal.fire({
            icon: "success",
            text: "Licencia creada con éxito",
            background: "#374be5",
            color: "#fff",
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    resetLicenseForWorkerAsync: async (rut) => {
      try {
        const response = await resetLicenseForWorker(rut);
        if (response.data.mensaje === "Licencia reestablecida") {
          const rutData = rut.rut;
          set((state) => ({
            ...state,
            workersWithLicense: state.workersWithLicense.filter(
              (worker) => worker.rut !== rutData
            ),
          }));
          Swal.fire({
            icon: "success",
            text: "Se eliminó la licencia del trabajador",
            background: "#374be5",
            color: "#fff",
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  }))
);

export default useStore;
