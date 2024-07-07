import React from "react";
import mrcooper from "../../public/mrcooperlogo.jpg";
import microsoft from "../../public/microsoftlogo.png";
import linkedin from "../../public/linkedin.png";
import ucsd from "../../public/ucsdcse.png";
import Image from "next/image";

function Experience() {
  return (
    <section className="p-10">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          Experience
        </span>
      </h1>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
      <div className="rounded-xl overflow-hidden shadow-lg basis-1/3 flex-1 border-4">
          <div className="flex flex-col items-center p-10">
            <Image
              className="mb-3 w-24 h-24 shadow-lg"
              src={linkedin}
              alt="LinkedIn Logo"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Software Engineer Intern
            </h5>
            <span className="text-md text-gray-500 dark:text-gray-400">
              LinkedIn &nbsp;&nbsp; 06/2024 - PRESENT
            </span>
            <ul className="mt-5 max-w-lg list-disc text-gray-500 dark:text-gray-400">
              <li className="mb-2">
                Current intern on the iOS Infrastructure & Productivity Team working on creating alerts within LinkedIn’s beta iOS app to drive increased usage among LinkedIn employees
              </li>
              <li className="mb-2">
                Wrote SQL queries to monitor the increase in beta usage among LinkedIn employees 
              </li>
              <li className="mb-2">
                Frameworks/Technologies used: Objective-C, Swift, SQL, Apache Avro
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg basis-1/3 flex-1 border-4">
          <div className="flex flex-col items-center p-10">
            <Image
              className="mb-3 w-24 h-24 shadow-lg"
              src={ucsd}
              alt="UCSD Logo"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Instructional Assistant
            </h5>
            <span className="text-md text-gray-500 dark:text-gray-400">
              UCSD &nbsp;&nbsp; 09/2023 - 06/2024
            </span>
            <ul className="mt-5 max-w-lg list-disc text-gray-500 dark:text-gray-400">
              <li className="mb-2">
              <span className="font-bold">AI Search & Reasoning</span>: Held ~2 lab hours a week to assist students working on various Python programming assignments (Path Finding, 2048 Solver, Blackjack AI, Gomoku AI, Sudoku Solver) and also help with grading the programming assignments; led 1 discussion section
              </li>
              <li className="mb-2">
              <span className="font-bold">Computer Organization & Systems Programming</span>: Held ~3 lab hours a week to assist students working on various C & Assembly programming assignments; other responsibilities include grading assignments and quizzes
              </li>
              <li className="mb-2">
              <span className="font-bold">Principles of Computer Operating Systems</span>: Held ~6 lab hours a week to assist students working on implementing threading, multiprogramming, and paging capabilities in the Nachos Operating System using Java
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg basis-1/3 flex-1 border-4">
          <div className="flex flex-col items-center p-10">
            <Image
              className="mb-3 w-24 h-24 shadow-lg"
              src={microsoft}
              alt="Microsoft Logo"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Software Engineer Intern
            </h5>
            <span className="text-md text-gray-500 dark:text-gray-400">
              Microsoft &nbsp;&nbsp; 06/2023 - 08/2023
            </span>
            <ul className="mt-5 max-w-lg list-disc text-gray-500 dark:text-gray-400">
              <li className="mb-2">
                Interned on Azure Speech (under AI Platform) to develop & deploy a web application that enables researchers and potential customers to compare the performance of various noise suppression models
              </li>
              <li className="mb-2">
                Instrumented the app using Application Insights, ensuring real-time monitoring and collection of 100% of app data
              </li>
              <li className="mb-2">
                Frameworks/Technologies used: Node.js, React.js, TypeScript, Azure Machine Learning, Azure Cosmos DB
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg basis-1/3 flex-1 border-4">
          <div className="flex flex-col items-center p-10">
            <Image
              className="mb-3 w-24 h-24 shadow-lg"
              src={mrcooper}
              alt="Mr. Cooper Logo"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Software Engineer Intern
            </h5>
            <span className="text-md text-gray-500 dark:text-gray-400">
              Mr. Cooper Group &nbsp;&nbsp; 06/2022 - 08/2022
            </span>
            <ul className="mt-5 max-w-lg list-disc text-gray-500 dark:text-gray-400">
              <li className="mb-2">
                Created a dashboard using{" "}
                <span className="font-bold">React.js, TypeScript</span>, and{" "}
                <span className="font-bold">Material UI</span> for admins to
                navigate between different pages easily
              </li>
              <li className="mb-2">
                Developed a feature that allows admins to maintain information
                in <span className="font-bold">5+ SQL Server tables</span>{" "}
                through spreadsheet uploads
              </li>
              <li>
                Coded API endpoints using{" "}
                <span className="font-bold">C#, .NET 6.0, MediatR, Aspose</span>
                , and <span className="font-bold">Entity Framework</span> to
                parse & store spreadsheet information
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
