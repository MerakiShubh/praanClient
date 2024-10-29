import axiosClient from "./axiosClient";

export const addDevice = async (userData) => {
  const response = await axiosClient.post("/device/adddevice", userData, {
    withCredentials: true,
  });
  return response.data;
};
