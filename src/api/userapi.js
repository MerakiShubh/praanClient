import axiosClient from "./axiosClient";

export const createUser = async (userData) => {
  const response = await axiosClient.post("/user/createuser", userData, {
    withCredentials: true,
  });
  return response.data;
};
