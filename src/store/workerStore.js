import { create } from "zustand";
import { getAllWorkers } from "../api/workers.services";

const useStore = create((set) => ({
  workers: [],
  getWorkersAsync: async () => {
    try{
        const response = await getAllWorkers();
        set({
          workers: response.data,
        });
    } catch(err){
        alert("Ha ocurrido un error al intentar recuperar la información")
    }
  },

}));

export default useStore ;
