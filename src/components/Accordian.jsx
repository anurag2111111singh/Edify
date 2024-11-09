import React, { useContext } from "react";
import { Accordion } from "flowbite-react";
import { AppContext } from "../App";

function Accordian() {
  const { theme } = useContext(AppContext);

  return (
    <div
      className={
        theme === "dark"
          ? "dark my-10 lg:mx-24 mx-8"
          : "my-10 lg:mx-24 mx-8 shadow-md bg-white"
      }
    >
      <Accordion className="dark:bg-zinc-900 text-left">
        <Accordion.Panel>
          <Accordion.Title className="dark:bg-zinc-900 dark:hover:bg-zinc-950">
            What is Edify  ?
          </Accordion.Title>
          <Accordion.Content className="dark:bg-zinc-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Edify   is an educational platform designed to provide resources,
              tutorials, and articles for aspiring developers and
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className=" hover:underline dark:text-green-500"
                style={{ color: "var(--button-bg)" }}
              >
                tech enthusiasts.&nbsp;
              </a>
              It offers a wide range of content to help users learn programming
              languages, stay updated with the latest tech trends and prepare
              for careers in technology.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="dark:bg-zinc-900 dark:hover:bg-zinc-950">
            Does Edify offer job opportunities for developers?
          </Accordion.Title>
          <Accordion.Content className="dark:bg-zinc-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Yes, Edify provides job listings and opportunities for
              developers and tech professionals. In the "Get Hired" section of
              the website, you can explore job postings from leading tech
              companies, startups, and organizations. These listings include
              positions for software engineers, web developers, data scientists,
              and other roles in the tech industry.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="dark:bg-zinc-900 dark:hover:bg-zinc-950">
            How can I access the articles on Edify?
          </Accordion.Title>
          <Accordion.Content className="dark:bg-zinc-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              To access the articles on Edify, simply navigate to the
              Articles section on the website. Here, you'll find a collection of
              informative articles covering various topics such as programming,
              web development, software engineering, and more. Click on any
              article title to read the full content.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}

export default Accordian;
