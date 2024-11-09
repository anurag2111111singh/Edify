import React, { useContext, useState } from "react";
import { AppContext } from "../App";

function Searchbar() {
  const { setAllJobs, setJobsLoading } = useContext(AppContext);

  const [searchText, setSearchText] = useState(""); // State to store input text

  const handleInputChange = (event) => {
    setSearchText(event.target.value); // Update search text state
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setJobsLoading(true);
      const response = await fetch(
        `https://geekgrid-backend.onrender.com/jobs?query=${encodeURIComponent(
          searchText
        )}`
      );
      if (response.ok) {
        setJobsLoading(false);
      } else {
        throw new Error("Failed to fetch jobs");
      }
      const data = await response.json();
      setAllJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return (
    <div className="flex flex-row w-full mt-10 md:mt-0 mb-4 ">
      <form onSubmit={handleSubmit} className="flex w-full mx-3 md:mx-0">
        <input
          type="text"
          id="simple-search"
          className="dark:bg-zinc-900 w-full focus:ring-green-500 focus:border-green-500 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block ps-10 px-3 py-4 focus:ring-0 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search by internship title/skill"
          value={searchText}
          onChange={handleInputChange}
          required
        />
        <button
          type="submit"
          className="py-2 px-6 ms-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-0 focus:outline-none md:mr-10 sm:mr-0"
        >
          <span className="font-semibold">Search</span>
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
