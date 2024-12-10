import Image from "next/image"

export default function Technology() {
	return (
		<div className="technology-wrapper flex flex-col gap-4 md:gap-10">
			<div className="description md:text-lg">
				Using a combination of cutting-edge technologies and reliable open-source software I help in building user-focused, performant apps and websites for smartphones, tablets, and desktops.
			</div>

			<div className="icons flex gap-2 lg:gap-8 flex-wrap text-xs md:text-base lg:text-base">
				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/java.png" width={60} height={60} alt="java" className="max-md:w-8 max-md:h-8" />
					<span>Java</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/js.png" width={60} height={60} alt="js" className="max-md:w-8 max-md:h-8" />
					<span>Javascript</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/typescript.svg" width={60} height={60} alt="typescript" className="max-md:w-8 max-md:h-8" />
					<span>Typescript</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/aws-icon.webp" width={60} height={60} alt="aws" className="max-md:w-8 max-md:h-8" />
					<span>AWS</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/azure.png" width={60} height={60} alt="azure" className="max-md:w-8 max-md:h-8" />
					<span>Azure</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/node.png" width={60} height={60} alt="node" className="max-md:w-8 max-md:h-8" />
					<span>Node Js</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/physics.png" width={60} height={60} alt="physics" className="max-md:w-8 max-md:h-8" />
					<span>React</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/next.svg" width={60} height={60} alt="next" className="max-md:w-8 max-md:h-8" />
					<span>Next.js</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/sql-server.png" width={60} height={60} alt="sql" className="max-md:w-8 max-md:h-8" />
					<span>MySQL</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/database.png" width={60} height={60} alt="postgres" className="max-md:w-8 max-md:h-8" />
					<span>PostgreSQL</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/mui.jpeg" width={60} height={60} alt="mui" className="max-md:w-8 max-md:h-8" />
					<span>Material UI</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/tailwindcss.svg" width={60} height={60} alt="tailwind" className="max-md:w-8 max-md:h-8" />
					<span>Tailwind CSS</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/git.svg" width={60} height={60} alt="git" className="max-md:w-8 max-md:h-8" />
					<span>Git</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/getpostman.svg" width={60} height={60} alt="getpostman" className="max-md:w-8 max-md:h-8" />
					<span>Postman</span>
				</div>
			</div>
		</div>
	)
}