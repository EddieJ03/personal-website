import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/legacy/image";
import edward from "../../public/edwardprofile.jpg";

function Intro({ darkMode, setDarkMode }) {
  return (
    <section className="min-h-screen">
      <div className="text-center p-10">
        <h1
          className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white hover:cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        >
          <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600 ">
            Edward Jin
          </span>
        </h1>
        <h3 className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Computer Science Student @ UCSD. I am passionate about building
          impactful software and enjoy learning new tools & technologies.
        </h3>
        <a
          href="https://drive.google.com/file/d/1AZh0XIZOOZzUGBWS44C6xN30ERQvq_3s/view"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-900"
        >
          RESUME
          <svg
            className="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <a href="https://www.linkedin.com/in/edwardcjin/">
          <AiFillLinkedin></AiFillLinkedin>
        </a>
        <a href="https://github.com/EddieJ03">
          <AiFillGithub></AiFillGithub>
        </a>
      </div>
      <div className="relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
        <Image src={edward} layout="fill" objectFit="cover" />
      </div>
    </section>
  );
}

export default Intro;
