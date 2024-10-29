import axiosClient from "./axiosClient";

export const getDeviceDataForDate = async (date) => {
  try {
    const response = await axiosClient.get(
      `/datedata/datafordate?date=${date}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching device data:", error);
    throw error;
  }
};
