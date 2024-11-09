import React, { useContext } from "react";
import { AppContext } from "../App";
import joblight from "../assets/images/job-light.png";
import jobdark from "../assets/images/job-dark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import NoJobs from "../assets/images/NoJobs.png";

function Jobs() {
  const { theme, allJobs, jobDescription, setJobDescription } =
    useContext(AppContext);

  console.log("Jobs :", allJobs);

  if (allJobs) {
    return (
      <div>
        {jobDescription && (
          <div>
            <div className={theme === "dark" ? "dark " : ""}>
              <div className="fixed inset-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
                <div className="bg-white dark:bg-zinc-900 py-4 px-8 rounded-md z-10 w-auto text-left">
                  <p>{jobDescription}</p>
                  <button
                    className="job-below-right-button bg-green-500 text-white text-sm font-semibold py-2 px-4 rounded-md"
                    onClick={() => setJobDescription(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          className={
            theme === "dark"
              ? "dark get-hired flex-col p-0 md:p-5 border-none"
              : "get-hired flex-col p-0 md:p-5"
          }
        >
          <div className="overflow-auto max-h-[95vh]">
            <ul className="jobs">
              {allJobs.map((job, index) => (
                <li
                  key={index}
                  className="job bg-white border dark:bg-zinc-900 border-gray-300 rounded-md p-5 my-5"
                >
                  <div className="job-top flex items-center">
                    <div className="job-img p-2 mr-4">
                      <img
                        src={
                          job.thumbnail ||
                          (theme === "light" ? joblight : jobdark)
                        }
                        alt=""
                        className="h-10 w-10 rounded-sm m1"
                      />
                    </div>
                    <div className="job-name">
                      <p className="tittle font-semibold">{job.company_name}</p>
                      <p className="location text-gray-500">{job.title}</p>
                      <p className="location text-gray-500">{job.location}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="job-detail">
                      {job.extensions.map((extension, index) => {
                        if (extension.startsWith("₹")) {
                          return (
                            <div
                              className="job-detail mr-8 text-left flex flex-row mt-4"
                              key={index}
                            >
                              <FontAwesomeIcon
                                icon={faWallet}
                                className={
                                  theme === "dark" ? "text-white mr-3" : "mr-3"
                                }
                              />
                              <p className="text-sm dark:text-white">
                                {extension}
                              </p>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                    <div className="job-below flex justify-between items-center mt-2">
                      <div className="job-below-left flex">
                        {job.via && (
                          <div className="job-detail mr-8">
                            <p className="tittle text-gray-500">Posted </p>
                            <p className="text-sm font-medium">{job.via}</p>
                          </div>
                        )}
                        {job.detected_extensions.posted_at && (
                          <div className="job-detail mr-8">
                            <p className="tittle text-gray-500">Posted </p>
                            <p className="text-sm font-medium">
                              {job.detected_extensions.posted_at}
                            </p>
                          </div>
                        )}
                        <div className="job-detail">
                          {job.detected_extensions.schedule_type && (
                            <div className="job-detail mr-8">
                              <p className="tittle text-gray-500">Type</p>
                              <p className="text-sm font-medium">
                                {job.detected_extensions.schedule_type}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="job-below-right">
                        <button
                          className="job-below-right-button bg-green-500 text-white text-sm font-semibold py-2 px-4 rounded-md"
                          onClick={() => setJobDescription(job.description)}
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (!allJobs) {
    return (
      <div className="md:mx-20 sm:mx-15 flex flex-col my-14 md:my-0">
        <h2 className="p-1 mt-0 mb-10 md:mb-0 md:w-90 w-95 py-2 mx-10 font-semibold bg-green-200 dark:bg-gray-500 rounded-md text-gray-600 dark:text-white">
          Start you job hunt here!!
        </h2>
        <img src={NoJobs} alt="" className="mx-16 md:mx-0"></img>
      </div>
    );
  }
}

export default Jobs;
