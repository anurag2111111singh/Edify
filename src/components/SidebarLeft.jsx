import React, { useContext } from "react";
import { AppContext } from "../App";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faCodeBranch,
  faSuitcase,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

function SidebarLeft() {
  const { theme } = useContext(AppContext);

  return (
    <div
      className={
        theme === "dark"
          ? "dark hidden md:flex flex-col w-64 ml-8 rounded-md border-none"
          : "hidden md:flex flex-col w-64 ml-8 rounded-md border border-gray-500"
      }
    >
      {/* <div className="dark hidden md:flex flex-col w-72 ml-8"> */}
      <div className="flex flex-col flex-1 overflow-y-auto bg-white dark:bg-zinc-900 rounded-md">
        <nav className="flex-1 px-2 py-4">
          <a className="flex items-center px-4 py-2 text-gray-900 dark:text-gray-100 dark:hover:bg-zinc-950 hover:bg-gray-200 rounded-md">
            <FontAwesomeIcon icon={faGlobe} className="mr-3" />
            All Jobs
          </a>
          <a className="flex items-center px-4 py-2 mt-2 text-gray-900 dark:text-gray-100 dark:hover:bg-zinc-950 hover:bg-gray-200 rounded-md">
            <FontAwesomeIcon icon={faSuitcase} className="mr-3" />
            Internships
          </a>
          <a className="flex items-center px-4 py-2 mt-2 text-gray-900 dark:text-gray-100 dark:hover:bg-zinc-950 hover:bg-gray-200 rounded-md">
            <FontAwesomeIcon icon={faCodeBranch} className="mr-3" />
            Remote
          </a>
          <a className="flex items-center px-4 py-2 mt-2 text-gray-900 dark:text-gray-100 dark:hover:bg-zinc-950 hover:bg-gray-200 rounded-md">
            <FontAwesomeIcon icon={faCirclePlus} className="mr-3" />
            Other Jobs
          </a>
        </nav>
      </div>
    </div>
  );
}

export default SidebarLeft;
