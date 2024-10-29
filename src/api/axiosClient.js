import axios from "axios";
import { store } from "../app/store";

const axiosClient = axios.create({
  baseURL: "https://praanserver.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const { auth } = store.getState();
    if (auth && auth.accessToken) {
      config.headers.Authorization = `Bearer ${auth.accessToken}`;
    } else {
      console.warn("No access token available for this request.");
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
