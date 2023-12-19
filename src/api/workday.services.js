import axios from "axios";

export const checkIn = async (date, rut) =>
  await axios.post(`http://localhost:8000/check-in/${date}`, rut);
