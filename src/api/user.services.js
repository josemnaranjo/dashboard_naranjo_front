import axios from "axios";


export const register = async (user) =>
  await axios.post("http://localhost:8000/register", user);

export const logout = async () => {
  try {
    const response = await axios.post("http://localhost:8000/logout");
    if (!response.data.success) {
      return { success: false, data: response };
    } else {
      return { success: true, data: response };
    }
  } catch (error) {
    return { success: false, data: { errors: { error: error } } };
  }
};

export const login = async (user) =>
  await axios.post("http://localhost:8000/login", user);

export const getUser = async (email) =>
  await axios.post("http://localhost:8000/get-user", email);
