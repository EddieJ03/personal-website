import React from "react";
import Image from "next/image";
import bogglelive from "../../public/bogglelive.png";
import younotes from "../../public/younotespic.png";
import amazonreviews from "../../public/amazonreviews.png";
import wrathofzeus from "../../public/entrance_zeus.png";
import president from "../../public/fdr.png";
import mlplatform from "../../public/mlplatform.png";
import { AiFillGithub, AiFillYoutube, AiOutlineLink } from "react-icons/ai";

function Projects() {
  return (
    <section className="p-10">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          Projects
        </span>
      </h1>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        
        
      <div className="rounded-xl overflow-hidden shadow-lg basis-1/3 flex-1 border-4">
          <Image
            className="rounded-t-lg object-cover max-h-96"
            width={"100%"}
            layout="responsive"
            src={mlplatform}
            alt="sorting visualizer pic"
          />
          <div className="px-6 py-4">
            <div className="flex flex-row font-bold justify-center gap-5 items-center text-xl mb-2  dark:text-white">
              MiniMLPlatform
              <div className="flex justify-center items-center bg-blue-400 h-6 w-6 rounded-full">
                <a href="https://github.com/EddieJ03/ml-infra">
                  <AiFillGithub />
                </a>
              </div>
            </div>
            <p className="text-gray-700 text-center dark:text-white">
              A self-hosted machine learning platform you can spin up on Azure using Pulumi.
            </p>
            <div className="px-6 pt-4 pb-2 text-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Pulumi
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                TypeScript
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Docker
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Kubernetes
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Azure
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Poetry
              </span>
            </div>
          </div>
        </div>
        
      <div className="rounded-xl overflow-hidden shadow-lg basis-1/3 flex-1 border-4">
          <Image
            className="rounded-t-lg object-cover max-h-96"
            width={"100%"}
            layout="responsive"
            src={wrathofzeus}
            alt="Wrath of Zeus Pic"
          />
          <div className="px-6 py-4">
            <div className="flex flex-row font-bold justify-center gap-5 items-center text-xl mb-2  dark:text-white">
              Wrath of Zeus
              <div className="flex justify-center items-center bg-blue-400 h-6 w-6 rounded-full">
                <a href="https://github.com/ucsd-cse125-sp24/group3">
                  <AiFillGithub />
                </a>
              </div>
                <div className="flex justify-center items-center bg-blue-400 h-6 w-6 rounded-full">  
                <a href="https://www.youtube.com/watch?v=AMQor-28tAw&t=204s&ab_channel=TheQualcommInstitute">
                  <AiFillYoutube />
                </a>
              </div>
            </div>
            <p className="text-gray-700 text-center dark:text-white">
              A 3-v-1 asymmetric maze escape game where 3 players attempt to escape a maze while Zeus tries to stop them from above.
            </p>
            <div className="px-6 pt-4 pb-2 text-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                C++
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                OpenGL
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                GLFW
              </span><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                SFML
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                CMake
              </span><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Visual Studio
              </span>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-lg basis-1/3 flex-1 border-4">
          <Image
            className="rounded-t-lg object-cover max-h-96"
            width={"100%"}
            layout="responsive"
            src={president}
            alt="President Pic"
          />
          <div className="px-6 py-4">
            <div className="flex flex-row font-bold justify-center gap-5 items-center text-xl mb-2  dark:text-white">
              PresGPT2
              <div className="flex justify-center items-center bg-blue-400 h-6 w-6 rounded-full">
                <a href="https://president-gpt2-dfbq9judmtpbztdw2o7snp.streamlit.app/">
                  <AiOutlineLink />
                </a>
              </div>
              <div className="flex justify-center items-center bg-blue-400 h-6 w-6 rounded-full">
                <a href="https://github.com/EddieJ03/president-gpt2">
                  <AiFillGithub />
                </a>
              </div>
            </div>
            <p className="text-gray-700 text-center dark:text-white">
              A Transformer Decoder trained on multiple GPUs that completes a sentence like a popular president.
            </p>
            <div className="px-6 pt-4 pb-2 text-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Python
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                PyTorch
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Distributed Training
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Streamlit
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg basis-1/3 flex-1 border-4">
          <Image
            className="rounded-t-lg object-cover max-h-96"
            width={"100%"}
            layout="responsive"
            src={bogglelive}
            alt="Boggle Live Pic"
          />
          <div className="px-6 py-4">
            <div className="flex flex-row font-bold justify-center gap-5 items-center text-xl mb-2  dark:text-white">
              Boggle Live
              <div className="flex justify-center items-center bg-blue-400 h-6 w-6 rounded-full">
                <a href="https://boggle-live.netlify.app">
                  <AiOutlineLink />
                </a>
              </div>
              <div className="flex justify-center items-center bg-blue-400 h-6 w-6 rounded-full">
                <a href="https://github.com/EddieJ03/boggle-live-frontend">
                  <AiFillGithub />
                </a>
              </div>
            </div>
            <p className="text-gray-700 text-center dark:text-white">
              A real-time, two-player version of Boggle online that you can play
              with friends or family. Enabled real-time game streaming with Kafka.
            </p>
            <div className="px-6 pt-4 pb-2 text-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                React.js
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Go
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Docker
              </span><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Kafka
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Azure Virtual Machine
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg basis-1/3 flex-1 border-4">
          <Image
            className="rounded-t-lg object-cover max-h-96"
            width={"100%"}
            layout="responsive"
            src={younotes}
            alt="ytnotes pic"
          />
          <div className="px-6 py-4">
            <div className="flex flex-row font-bold justify-center gap-5 items-center text-xl mb-2  dark:text-white">
              YTNotes
              <div className="flex justify-center items-center bg-blue-400 h-6 w-6 rounded-full">
                <a href="https://github.com/EddieJ03/ytnotes">
                  <AiFillGithub />
                </a>
              </div>
            </div>
            <p className="text-gray-700 text-center dark:text-white">
              A Chrome Extension that allows you to take time-stamped notes
              while watching a YouTube video. All notes are also stored
              independently per video.
            </p>
            <div className="px-6 pt-4 pb-2 text-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Express.js
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Node.js
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Redis
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Mongo
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Docker
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Kubernetes
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg basis-1/3 flex-1 border-4">
          <Image
            className="rounded-t-lg object-contain max-h-96"
            width={"100%"}
            layout="responsive"
            src={amazonreviews}
            alt="amazon reviews pic"
          />
          <div className="px-6 py-4">
            <div className="flex flex-row font-bold justify-center gap-5 items-center text-xl mb-2  dark:text-white">
              Amazon Reviews Machine Learning 
              <div className="flex justify-center items-center bg-blue-400 h-6 w-6 rounded-full">
                <a href="https://github.com/EddieJ03/Amazon-Reviews-Project">
                  <AiFillGithub />
                </a>
              </div>
            </div>
            <p className="text-gray-700 text-center dark:text-white">
              A machine learning project to predict the sentiment of Amazon reviews. Created three different models and compared results for analysis.
            </p>
            <div className="px-6 pt-4 pb-2 text-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Python
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Jupyter Notebook
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                TensorFlow
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Machine Learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
