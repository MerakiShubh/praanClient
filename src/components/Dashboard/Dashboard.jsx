import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import DataSwitcher from "../DataSwitcher/DataSwitcher";

const Dashboard = () => {
  const [deviceData, setDeviceData] = useState({});
  const [selectedDevice, setSelectedDevice] = useState(null);

  useEffect(() => {
    const connectToSSE = () => {
      const eventSource = new EventSource(
        "http://localhost:5000/api/v1/data/real-time"
      );

      eventSource.onmessage = (event) => {
        try {
          const newData = JSON.parse(event.data);
          setDeviceData((prevData) => {
            const updatedData = { ...prevData };
            newData.forEach((device) => {
              const deviceId = device.device;
              if (!updatedData[deviceId]) {
                updatedData[deviceId] = [];
              }
              updatedData[deviceId] = [...updatedData[deviceId], device].slice(
                -10
              );
            });
            return updatedData;
          });
        } catch (error) {
          console.error("Error parsing SSE data:", error);
        }
      };

      eventSource.onerror = (error) => {
        console.error("SSE connection error:", error);
        eventSource.close();
        setTimeout(() => {
          connectToSSE();
        }, 5000);
      };

      return eventSource;
    };

    const eventSource = connectToSSE();

    return () => {
      eventSource.close();
    };
  }, []);

  useEffect(() => {
    if (!selectedDevice && Object.keys(deviceData).length > 0) {
      setSelectedDevice(Object.keys(deviceData)[0]);
    }
  }, [deviceData, selectedDevice]);

  const handleTabClick = (deviceId) => {
    setSelectedDevice(deviceId);
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const chartData = (data) => ({
    labels: data.map((item) => formatTimestamp(item.timestamp)),
    datasets: [
      {
        label: "PM 1",
        data: data.map((item) => item.p1),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
      {
        label: "PM 2.5",
        data: data.map((item) => item.p25),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "PM 10",
        data: data.map((item) => item.p10),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.2)",
      },
    ],
  });

  const deviceLabels = Object.keys(deviceData).reduce(
    (acc, deviceId, index) => {
      acc[deviceId] = `Device ${index + 1}`;
      return acc;
    },
    {}
  );

  return (
    <div className="flex h-screen p-5 gap-5">
      <div className="w-3/4 bg-white rounded-lg p-6 shadow-md">
        <h1 className="text-xl font-bold mb-4">Device Data</h1>
        <div className="flex gap-4 mb-6">
          {Object.keys(deviceData).map((deviceId) => (
            <button
              key={deviceId}
              onClick={() => handleTabClick(deviceId)}
              className={`px-4 py-2 font-medium ${
                selectedDevice === deviceId
                  ? "border-b-2 border-black text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {deviceLabels[deviceId]}
            </button>
          ))}
        </div>

        <div className="h-96">
          {selectedDevice && deviceData[selectedDevice] ? (
            <>
              <p className="mb-4 font-semibold">
                Rendering Chart for {deviceLabels[selectedDevice]}
              </p>
              <Line data={chartData(deviceData[selectedDevice])} />
            </>
          ) : (
            <p>Please select a device to view its data.</p>
          )}
        </div>
      </div>
      <div className="w-1/4">
        <DataSwitcher />
      </div>
    </div>
  );
};

export default Dashboard;
