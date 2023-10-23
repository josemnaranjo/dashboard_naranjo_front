import axios from "axios";

export const getAllWorkers = async () =>
  await axios.get("http://localhost:8000/get-workers");

export const createWorker = async (worker) =>
  await axios.post("http://localhost:8000/create-worker", worker);

export const deleteWorker = async (rut) =>
  await axios.delete(`http://localhost:8000/delete-worker/${rut}`);
