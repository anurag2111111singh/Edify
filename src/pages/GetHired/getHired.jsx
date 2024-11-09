import React, { useContext } from "react";
import { ColorRing } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./getHired.css"; // Remove this import if no longer needed
import { AppContext } from "../../App";
import TempComp from "../../components/TempComp";
import SidebarLeft from "../../components/SidebarLeft";
import CardAdvt from "../../components/CardAdvt";
import Searchbar from "../../components/Searchbar";
import Jobs from "../../components/Jobs";
export function JobList() {
  const { theme, applicationOpen, jobsLoading } = useContext(AppContext);
  // const { loading } = useFetchJobs();

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  const showToastMessage = () => {
    toast.success("Applied Successfully !");
  };

  return (
    <div className="flex flex-row justify-between">
      {jobsLoading && (
        <div>
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#4fa94d", "#4fa94d", "#4fa94d", "#4fa94d", "#4fa94d"]}
            />
          </div>
        </div>
      )}
      <div className="hidden md:flex">
        <SidebarLeft />
      </div>
      <ToastContainer />
      {applicationOpen && <TempComp onSubmit={showToastMessage} />}
      <div
        className={
          theme === "dark"
            ? "dark flex flex-col justify-center items-center"
            : "flex flex-col justify-center items-center"
        }
      >
        {/* <div className="dark flex flex-col justify-center items-center"> */}
        <Searchbar />
        <Jobs />
      </div>
      <div className="hidden md:flex">
        <CardAdvt />
      </div>
    </div>
  );
}
