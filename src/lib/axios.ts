import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://qbc9.liara.run/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
