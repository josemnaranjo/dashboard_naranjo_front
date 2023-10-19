import { create } from "zustand";
import { getAllWorkers } from "../api/workers.services";

const useStore = create((set) => ({
  workers: [],
  getWorkersAsync: async () => {
    const response = await getAllWorkers();
    set({
      workers: response.data,
    });
  },

}));

export { useStore };
