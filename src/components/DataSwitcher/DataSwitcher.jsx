import { useState } from "react";
import { useQuery } from "react-query";
import { getDeviceDataForDate } from "../../api/getDeviceDataForDateapi.js";

const DataSwitcher = () => {
  const todayDate = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const [activePM, setActivePM] = useState("p1");

  const { data, isLoading, error } = useQuery(
    ["deviceData", selectedDate],
    () => getDeviceDataForDate(selectedDate),
    {
      keepPreviousData: true,
      staleTime: 0, // Ensure cache is fresh each time
      retry: false, // Prevent retries on 404
    }
  );

  const handleDateChange = (newDate) => setSelectedDate(newDate);

  // Check for 404 error and display custom message
  const pmValue = isLoading
    ? "Loading..."
    : error?.response?.status === 404
    ? `Data is not available for ${selectedDate}`
    : error
    ? `Error: ${error.message || "Failed to load data"}`
    : data?.message?.data?.[activePM] || "Data not available";

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md h-full">
      <h2 className="text-lg font-semibold text-gray-700">
        {data?.data?.deviceName || "Device Name"}
      </h2>
      <h3 className="mt-2 text-md font-medium text-gray-500">
        {activePM.toUpperCase()}
      </h3>
      <div className="text-4xl font-bold text-gray-900 my-4">{pmValue}</div>
      <p className="text-gray-500 mb-4">{selectedDate}</p>

      <div className="flex space-x-4 mb-4">
        <button
          onClick={() =>
            handleDateChange(
              new Date(
                new Date(selectedDate).setDate(
                  new Date(selectedDate).getDate() - 1
                )
              )
                .toISOString()
                .split("T")[0]
            )
          }
          className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={() =>
            handleDateChange(
              new Date(
                new Date(selectedDate).setDate(
                  new Date(selectedDate).getDate() + 1
                )
              )
                .toISOString()
                .split("T")[0]
            )
          }
          className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Next
        </button>
      </div>

      <div className="flex space-x-4">
        {["p1", "p25", "p10"].map((pm) => (
          <div
            key={pm}
            onClick={() => setActivePM(pm)}
            className={`px-3 py-1 cursor-pointer rounded-md ${
              activePM === pm
                ? "bg-blue-500 text-white font-semibold"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {pm.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataSwitcher;
