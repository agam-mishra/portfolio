"use client"
import Image from "next/image";
import { Button, Typography } from "@mui/joy";
import Link from "next/link";


export default function Home() {
	return (
		<div className="flex flex-col items-center bg-gradient-to-b from-slate-100 to-white px-6 py-6 text-center rounded">
			<div className="w-full max-w-3xl space-y-6">
				<Typography
					level="h2"
					className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 animate-fade-in"
				>
					Hi, I'm <span className="text-gray-500">Agam Mishra</span>!
				</Typography>

				<Typography
					level="body-lg"
					className="text-lg sm:text-xl md:text-2xl text-gray-600 text-left"
				>
					A passionate developer with <span className="font-semibold">4 years </span> of experience crafting impactful and innovative solutions.
					I specialize in building modern web applications, enhancing backend systems, and solving real-world challenges through technology.
				</Typography>

				<div className="flex justify-center gap-4 mt-4 text-lg">
					<Link
						href="/projects"
						className="font-bold text-slate-700 underline"
					>
						Explore My Work
					</Link>
					<Link
						href="/contact"
						className="font-bold text-slate-500 underline "
					>
						Get in Touch
					</Link>
				</div>

				<div className="mt-10 text-gray-500">
					<Typography variant="plain" className="text-2xl md:text-2xl">
						Discover how I turn ideas into functional and elegant solutions!
					</Typography>
				</div>
			</div>

			<div className="mt-16 flex items-center justify-center w-full">
				<Image
					src="/home.svg"
					alt="Developer Illustration"
					width={200}
					height={200}
					className="animate-float"
				/>
			</div>
		</div>

	);
}
