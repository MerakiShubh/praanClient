// getDeviceDataForDateapi.js
import axiosClient from "./axiosClient";

export const getDeviceDataForDate = async (date) => {
  try {
    const response = await axiosClient.get(
      `/datedata/datafordate?date=${date}`
    );
    console.log("Response Data:", response); // Check the structure of response data
    return response.data;
  } catch (error) {
    console.error("Error fetching device data:", error); // Log the error
    throw error;
  }
};
