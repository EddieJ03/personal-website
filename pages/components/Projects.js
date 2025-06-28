import Image from "next/image";
import bogglelive from "../../public/bogglelive.png";
import younotes from "../../public/younotespic.png";
import autonomous from "../../public/autonomous.png";
import wrathofzeus from "../../public/entrance_zeus.png";
import president from "../../public/fdr.png";
import mlplatform from "../../public/mlplatform.png";
import raft from "../../public/raft.svg";
import { AiFillGithub, AiFillYoutube, AiOutlineLink } from "react-icons/ai";

const projects = [
	{
		title: "MiniMLPlatform",
		image: mlplatform,
		alt: "sorting visualizer pic",
		description:
			"A self-hosted machine learning platform you can spin up on Azure using Pulumi.",
		links: [
			{ icon: <AiFillGithub />, url: "https://github.com/EddieJ03/ml-infra" },
		],
		tags: [
			"Pulumi",
			"TypeScript",
			"Docker",
			"Kubernetes",
			"Azure",
			"Poetry",
		],
	},
	{
		title: "Wrath of Zeus",
		image: wrathofzeus,
		alt: "Wrath of Zeus Pic",
		description:
			"A 3-v-1 asymmetric maze escape game where 3 players attempt to escape a maze while Zeus tries to stop them from above.",
		links: [
			{ icon: <AiFillGithub />, url: "https://github.com/ucsd-cse125-sp24/group3" },
			{
				icon: <AiFillYoutube />,
				url: "https://www.youtube.com/watch?v=AMQor-28tAw&t=204s&ab_channel=TheQualcommInstitute",
			},
		],
		tags: ["C++", "OpenGL", "GLFW", "SFML", "CMake", "Visual Studio"],
	},
	{
		title: "Argoverse Vehicle Motion Forecasting",
		image: autonomous,
		alt: "autonomous pic",
		description: "A deep learning project to do vehicle motion forecasting using the Argoverse 2 dataset.",
		links: [
			{ icon: <AiFillGithub />, url: "https://github.com/EddieJ03/autonomous-driving/" },
			{ icon: <AiOutlineLink />, url: "https://github.com/EddieJ03/autonomous-driving/blob/main/report.pdf" },
		],
		tags: [
			"Python",
			"PyTorch",
			"Attention",
			"LSTM",
			"Convolutional Neural Networks",
			"Jupyter Notebook",
			"NumPy",
		],
	},
	{
		title: "PresGPT2",
		image: president,
		alt: "President Pic",
		description:
			"A Transformer Decoder trained on multiple GPUs that completes a sentence like a popular president.",
		links: [
			{ icon: <AiOutlineLink />, url: "https://president-gpt2-dfbq9judmtpbztdw2o7snp.streamlit.app/" },
			{ icon: <AiFillGithub />, url: "https://github.com/EddieJ03/president-gpt2" },
		],
		tags: ["Python", "PyTorch", "Distributed Training", "Streamlit"],
	},
	{
		title: "Boggle Live",
		image: bogglelive,
		alt: "Boggle Live Pic",
		description:
			"A real-time, two-player version of Boggle online that you can play with friends or family. Enabled real-time game streaming with Redpanda (lightweight Kafka-compatible streaming platform).",
		links: [
			{ icon: <AiOutlineLink />, url: "https://boggle-live.netlify.app" },
			{ icon: <AiFillGithub />, url: "https://github.com/EddieJ03/boggle-live-frontend" },
		],
		tags: ["React.js", "Go", "Docker", "Kafka"],
	},
	{
		title: "YTNotes",
		image: younotes,
		alt: "ytnotes pic",
		description:
			"A Chrome Extension that allows you to take time-stamped notes while watching a YouTube video. All notes are also stored independently per video.",
		links: [
			{ icon: <AiFillGithub />, url: "https://github.com/EddieJ03/ytnotes" },
		],
		tags: ["Express.js", "Node.js", "Redis", "Mongo", "Docker", "Kubernetes"],
	},
	{
		title: "GoRaft",
		image: raft,
		alt: "raft pic",
		description:
			"Implemented the Raft consensus protocol from scratch using Go and gRPC. Also wrote a suite of tests to ensure correctness.",
		links: [
			{ icon: <AiFillGithub />, url: "https://github.com/EddieJ03/go-raft" },
			{
				icon: <AiOutlineLink />,
				url: "https://docs.google.com/document/d/1b9PiLlhFaiZRLAK0ExGCI6sORHdu5z758UHyFsg52-k/edit?usp=drive_link",
			},
		],
		tags: ["Go", "gRPC", "Distributed Systems"],
	},
];

function Projects() {
	const isOdd = projects.length % 2 === 1;
	return (
		<section className="p-10">
			<h1 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
				<span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
					Projects
				</span>
			</h1>
			<div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap lg:justify-start">
				{projects.map((project, idx) => {
					// If odd number of projects and this is the last one, center it
					const isLast = idx === projects.length - 1;
					const cardClass =
						isOdd && isLast
							? "rounded-xl overflow-hidden shadow-lg border-4 basis-1/4 flex-1"
							: "rounded-xl overflow-hidden shadow-lg basis-1/3 flex-1 border-4";
					return (
						<div key={idx} className={cardClass}>
							<Image
								className="rounded-t-lg object-cover max-h-96"
								width={"100%"}
								layout="responsive"
								src={project.image}
								alt={project.alt}
							/>
							<div className="px-6 py-4">
								<div className="flex flex-row font-bold justify-center gap-5 items-center text-xl mb-2  dark:text-white">
									{project.title}
									{project.links.map((link, i) => (
										<div
											key={i}
											className="flex justify-center items-center bg-blue-400 h-6 w-6 rounded-full"
										>
											<a
												href={link.url}
												target="_blank"
												rel="noopener noreferrer"
											>
												{link.icon}
											</a>
										</div>
									))}
								</div>
								<p className="text-gray-700 text-center dark:text-white">
									{project.description}
								</p>
								<div className="px-6 pt-4 pb-2 text-center">
									{project.tags.map((tag, i) => (
										<span
											key={i}
											className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Projects;
