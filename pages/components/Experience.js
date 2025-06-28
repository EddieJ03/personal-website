import React from "react";
import mrcooper from "../../public/mrcooperlogo.jpg";
import microsoft from "../../public/microsoftlogo.png";
import linkedin from "../../public/linkedin.png";
import ucsd from "../../public/cseucsd.png";
import databricks from "../../public/databricks.png";
import Image from "next/image";

const ExperienceCard = ({ logo, title, company, date, achievements }) => (
  <div className="flex flex-col h-full w-full transform transition-all duration-300 hover:scale-105 rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
    <div className="flex flex-col items-center p-8 space-y-4">
      <div className="relative w-24 h-24">
        <Image
          className="rounded-lg shadow-xl"
          src={logo}
          alt={`${company} Logo`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="text-center space-y-2">
        <h5 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h5>
        <span className="text-md font-medium text-blue-600 dark:text-blue-400">
          {company} • {date}
        </span>
      </div>
      <ul className="space-y-3 text-gray-600 dark:text-gray-300">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      logo: databricks,
      title: "Sofrtware Engineer Intern",
      company: "Databricks",
      date: "06/2025 - Present",
      achievements: [
        "Building a new service to improve diff testing for all teams across Databricks",
        "Using Scala, gRPC, and Bazel"
      ],
    },
    {
      logo: ucsd,
      title: "Instructional Assistant",
      company: "UCSD",
      date: "09/2023 - 12/2024",
      achievements: [
        "Operating Systems (Fall 2023, Fall 2024): Assisted students with Nachos OS implementation in Java",
        "AI Search & Reasoning (Spring 2024): Led lab sessions and discussions for Python projects including 2048 Solver, Blackjack AI and Sudoku Solver",
        "Computer Organization (Winter 2024): Provided guidance on C & Assembly programming assignments",
      ],
    },
    {
      logo: linkedin,
      title: "Software Engineer Intern",
      company: "LinkedIn",
      date: "06/2024 - 08/2024",
      achievements: [
        "Spearheaded initiative on the iOS Infrastructure & Productivity Team to build a feature that boosted LinkedIn's beta iOS app usage among employees by 33%",
        "Setup Hadoop pipelines and crafted SQL queries to develop real-time analytics dashboards to see usage trends of the feature & beta iOS app",
        "Technologies/Frameworks: Objective-C, Hadoop, SQL, Apache Avro",
      ],
    },
    {
      logo: microsoft,
      title: "Software Engineer Intern",
      company: "Microsoft",
      date: "06/2023 - 08/2023",
      achievements: [
        "Designed and developed a web application for the Azure Speech team to streamline comparisons across multiple noise suppression models, providing new evaluation insights and reducing manual work by 90%",
        "Implemented Application Insights monitoring with 100% data collection coverage to ensure health of service",
        "Technologies/Frameworks: Node.js, React.js, TypeScript, Azure Web Service, Azure ML, Azure Cosmos DB",
      ],
    },
    {
      logo: mrcooper,
      title: "Software Engineer Intern",
      company: "Mr. Cooper Group",
      date: "06/2022 - 08/2022",
      achievements: [
        "Implemented multiple backend API endpoints using .NET 6.0, MediatR, Aspose, and Entity Framework to automate extracting & storing Excel information into 10+ SQL Server tables, saving the Originations team 50+ hours of manual work per update",
        "Led the design and development of a navigation UI using React.js, TypeScript, and Material UI to allow for easier navigation between core site services",
      ],
    },
  ];

  return (
    <section className="py-16 px-6">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          Experience
        </span>
      </h1>
      <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {experiences.map((exp, index) => {
          const isLast = index === experiences.length - 1;
          const isOdd = experiences.length % 2 === 1;
          // Center last card if odd, but keep its width the same as others
          const wrapperClass =
            isOdd && isLast
              ? "col-span-1 lg:col-span-2 flex justify-center items-stretch"
              : "h-full w-full";
          return (
            <div key={index} className={wrapperClass}>
              <div className="w-full max-w-xl h-full flex">
                <ExperienceCard {...exp} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
