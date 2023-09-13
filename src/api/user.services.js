import axios from "axios";
axios.defaults.withCredentials = true;

export const Register = async (user) =>
  await axios.post("http://localhost:8000/register", user);
