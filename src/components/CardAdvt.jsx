import React, { useContext } from "react";
import { Card } from "flowbite-react";
import { AppContext } from "../App";

function CardAdvt() {
  const { theme } = useContext(AppContext);

  return (
    <div
      className={
        theme === "dark"
          ? "dark mr-8 rounded-md border border-none"
          : "mr-8 rounded-md border border-none"
      }
    >
      <Card
        className="max-w-sm dark:bg-zinc-900"
        imgSrc="https://ashish-webdev.web.app/imgs/projects/EcoScoot.png"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-left">
          EcoScoot
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 text-left">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </div>
  );
}

export default CardAdvt;
