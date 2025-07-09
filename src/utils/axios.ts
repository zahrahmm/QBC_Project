import axios from "axios";

<<<<<<< Updated upstream
const server = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  withCredentials: true,
=======
export const server = axios.create({
  baseURL: import.meta.env.VITE.APP_BASE_URL,
>>>>>>> Stashed changes
  headers: {
    "Content-Type": "application/json",
  },
});
