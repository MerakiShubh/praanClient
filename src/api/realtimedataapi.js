import axiosClient from "./axiosClient";

export const realTimeData = async () => {
  const response = await axiosClient.get("/data/real-time");
  return response.data;
};
