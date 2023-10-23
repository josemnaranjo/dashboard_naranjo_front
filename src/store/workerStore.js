import { create } from "zustand";
import { getAllWorkers, deleteWorker } from "../api/workers.services";

const useStore = create((set) => ({
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
        set((state)=> ({...state, workers: state.workers.filter(worker=> worker.rut !== rut)}))
      } else {
        alert("No se pudo borra al trabajador solicitado");
      }
    } catch (err) {
      alert(
        "Error con la base de datos. No se pudo borra al trabajador solicitado"
      );
    }
  },
}));

export default useStore;
