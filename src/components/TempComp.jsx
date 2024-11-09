import React, { useContext, useState } from "react";
import { AppContext } from "../App";

function TempComp({ onSubmit }) {
  // Define states for input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("Less than a year");
  const [file, setFile] = useState(null);
  const { applicationOpen, setApplicationOpen, theme } = useContext(AppContext);
  // Handler functions to update state on input change
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleSubmit = () => {
    onSubmit(); // Call the passed function to show the toast
    setTimeout(() => {
      setApplicationOpen(false); // Close the dialog
    }, 1000);
  };
  return (
    <>
      {/* <ToastContainer /> */}
      <div className={theme === "dark" ? "dark " : ""}>
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
          <div className="bg-white dark:bg-zinc-900 py-4 px-8 rounded-md z-10 w-auto text-left">
            <div className="font-bold pb-4 dark:text-white">
              Complete Your Application
            </div>
            <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="experience"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Years of experience
                </label>
                <select
                  id="experience"
                  value={experience}
                  onChange={handleExperienceChange}
                  required
                  className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                >
                  <option>Less than a year</option>
                  <option>1-2 years</option>
                  <option>2-4 years</option>
                  <option>4+ years</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="user_avatar"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Upload CV/Resume
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="user_avatar_help"
                  id="user_avatar"
                  type="file"
                  onChange={handleFileChange}
                  // required
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  className="mt-2 text-gray focus:ring-0 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-12 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  style={{ backgroundColor: "#e8e6e8" }}
                  onClick={() => setApplicationOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="mt-2 text-white focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-12 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  style={{ backgroundColor: "var(--button-bg)" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TempComp;
