import axios from "axios";

export const getAllWorkers = async () =>
  await axios.get("http://localhost:8000/get-workers");

export const createWorker = async (worker) =>
  await axios.post("http://localhost:8000/create-worker", worker);

export const deleteWorker = async (rut) =>
  await axios.delete(`http://localhost:8000/delete-worker/${rut}`);

export const updateWorker = async (workerData) =>
  await axios.put(`http://localhost:8000/update-worker`, workerData);

export const getAllWorkersWithLicense = async () =>
  await axios.get("http://localhost:8000/get-workers-with-licence");

export const updateLincenseForWorker = async (rut, licenseData) =>
  await axios.post(`http://localhost:8000/update-licence/${rut}`, licenseData);

  export const resetLicenseForWorker = async(rut) =>
    await axios.post("http://localhost:8000/reset-licence",rut)