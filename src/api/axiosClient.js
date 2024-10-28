import axios from "axios";
import { store } from "../app/store";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000/api/v1",
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
      // Optionally, handle token absence (e.g., redirect to login or show an error)
    }

    return config;
  },
  (error) => {
    // Handle any error in the request setup
    return Promise.reject(error);
  }
);

export default axiosClient;
