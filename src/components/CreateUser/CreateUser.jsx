import { useState } from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/authSlice.js";
import { createUser } from "../../api/userapi.js";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { store } from "../../app/store.js";

export default function CreateUser() {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mutation = useMutation(createUser, {
    onSuccess: (data) => {
      const { createdUser, accessToken } = data.data;
      console.log("Access token from create user", accessToken);
      dispatch(setCredentials({ user: createdUser, accessToken }));
      navigate("/adddevice"); // Redirect to AddDevice page
    },
    onError: (error) => {
      console.error("Error creating user:", error);
    },
  });

  console.log("Redux State after dispatch:", store.getState());

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ role, username });
  };

  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                Praan
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Fill in the form to authorize as Admin!!
              </p>

              <div className="flex items-center mt-8 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  PRAAN HQ, INDIA
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +44 1234567890
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  careers@praan.io
                </div>
              </div>
            </div>

            <form
              className="p-6 flex flex-col justify-center"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col">
                <label htmlFor="role" className="hidden">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  id="role"
                  placeholder="Role"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="username" className="hidden">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="md:w-32 bg-slate-800 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300 flex items-center justify-center"
                disabled={mutation.isLoading}
              >
                {mutation.isLoading ? (
                  <Loader className="animate-spin mr-2" />
                ) : (
                  "Create"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
