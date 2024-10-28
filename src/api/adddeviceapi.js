import axiosClient from "./axiosClient";

export const addDevice = async (userData) => {
  const response = await axiosClient.post("/device/adddevice", userData, {
    withCredentials: true,
  });
  console.log(response.data);
  return response.data;
};
