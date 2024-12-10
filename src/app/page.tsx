"use client";
import Image from "next/image";
import { Button, Typography } from "@mui/joy";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col items-center bg-gradient-to-b from-slate-100 to-white px-4 py-6 text-center rounded">
			<div className="w-full max-w-3xl space-y-6 gap-6">
				<Typography
					level="h2"
					className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 animate-fade-in"
				>
					{"Hi, I'm "}<span className="text-gray-500">Agam Mishra</span>!
				</Typography>

				<Typography
					level="body-lg"
					className="text-lg sm:text-xl md:text-2xl text-gray-600 text-left"
				>
					A passionate developer with <span className="font-semibold">4 years</span> of experience crafting impactful and innovative solutions.
					I specialize in <span className="font-semibold">building modern</span> web applications, enhancing backend systems, leveraging <span className="font-semibold">cloud</span> technologies, and <span className="font-semibold">optimizing</span> processes to solve real-world challenges efficiently and effectively.
				</Typography>

				<div className=" text-gray-500 italic">
					<Typography variant="plain" className="text-2xl md:text-2xl">
						Discover how I turn ideas into functional and elegant solutions!
					</Typography>
				</div>

				<div className="flex flex-col md:flex-row justify-center items-center gap-6">
					<div className="mt-4 flex justify-center w-full md:w-1/2">
						<Image
							src="/images/home/home.svg"
							alt="Developer Illustration"
							width={300}
							height={300}
							className="animate-float"
						/>
						{/* Uncomment for video */}
						{/* <video
              className="rounded-md shadow-lg"
              autoPlay
              loop
              muted
            >
              <source src="/code_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
					</div>
					<div className="flex justify-center gap-6 w-full md:w-1/2 flex-col text-lg">
						<Link
							href="/projects"
							className="font-bold text-slate-700 underline"
						>
							Explore My Work
						</Link>
						<Link
							href="/contact"
							className="font-bold text-slate-600 underline"
						>
							Get in Touch
						</Link>
						<Link
							href="/asset/Agam_Mishra_Resume.pdf"
							className="font-bold text-slate-500 underline"
							target="_blank"
						// download="Agam_Mishra_Resume.pdf"
						>
							Resume
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
