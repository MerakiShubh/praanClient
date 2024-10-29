import axiosClient from "./axiosClient";

export const realTimeData = async () => {
  const response = await axiosClient.get("/data/real-time");
  console.log(response.data);
  return response.data;
};
