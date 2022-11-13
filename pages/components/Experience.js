import React from 'react';
import mrcooper from "../../public/mrcooperlogo.jpg";
import microsoft from "../../public/microsoftlogo.png";
import ucsd from "../../public/ucsdcse.png";
import Image from 'next/image';

function Experience() {
  return (
    <section className="p-10">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white md:mt-10 sm:mt-10">
            <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                Experience
            </span>
        </h1>
        <div className="flex flex-col justify-center gap-10 py-10 lg:flex-row lg:flex-wrap">
            {/* <div className="basis-1/3 flex-1 max-w-2xl">
                <div className="flex flex-col items-center shadow-xl p-10 rounded-xl border-4">
                    <Image className="mb-3 w-24 h-24 shadow-lg" src={microsoft} />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        Software Engineer Intern
                    </h5>
                    <span class="text-md text-gray-500 dark:text-gray-400">
                        Microsoft
                    </span>
                    <ul className="mt-5 max-w-lg list-disc text-gray-500 dark:text-gray-400">
                        <li className="mb-2">
                            Incoming on AI Platform in Bellevue, Washington
                        </li>
                    </ul>
                </div>
            </div> */}
            <div className="basis-1/3 flex-1 max-w-2xl">
                <div className="flex flex-col items-center shadow-xl p-10 rounded-xl border-4">
                    <Image className="mb-3 w-24 h-24 shadow-lg rounded-full" src={ucsd} />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        Undergraduate Researcher
                    </h5>
                    <span class="text-md text-gray-500 dark:text-gray-400">
                        UCSD
                    </span>
                    <ul className="mt-5 max-w-lg list-disc text-gray-500 dark:text-gray-400">
                        <li className="mb-2">
                            Conducting research under Professor Ryan Kastner and Ph.D. student Jennifer Switzer to turn old Android phones into environmental sensors
                        </li>
                        <li className="mb-2">
                            Testing and improving the NativeScript Task Dispatcher library to allow background sensing tasks to overcome limitations
                        </li>
                        <li>
                            Collecting data to quantify the carbon emissions saved by repurposing old phones rather than making new sensors
                        </li>
                    </ul>
                </div>
            </div>
            <div className="basis-1/3 flex-1 max-w-2xl">
                <div className="flex flex-col items-center shadow-xl p-10 rounded-xl border-4">
                    <Image className="mb-3 w-24 h-24 shadow-lg" src={mrcooper} />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        Software Engineer Intern
                    </h5>
                    <span class="text-md text-gray-500 dark:text-gray-400">
                        Mr. Cooper Group
                    </span>
                    <ul className="mt-5 max-w-lg list-disc text-gray-500 dark:text-gray-400">
                        <li className="mb-2">
                            Created a dashboard using <span className="font-bold">React.js, TypeScript</span>, and <span className="font-bold">Material UI</span> for admins to navigate between different pages easily 
                        </li>
                        <li className="mb-2">
                            Developed a feature that allows admins to maintain information in <span className="font-bold">5+ SQL Server tables</span> through spreadsheet uploads
                        </li>
                        <li>
                            Coded API endpoints using <span className="font-bold">C#, .NET 6.0, MediatR, Aspose</span>, and <span className="font-bold">Entity Framework</span> to parse & store spreadsheet information
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience;