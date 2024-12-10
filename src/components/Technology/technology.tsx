import { faJava } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image"

export default function Technology() {
	return (
		<div className="technology-wrapper flex flex-col gap-10">
			<div className="description text-lg">
				Using a combination of cutting-edge technologies and reliable open-source software I help in building user-focused, performant apps and websites for smartphones, tablets, and desktops.
			</div>

			<div className="icons flex gap-8 flex-wrap">
				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/java.png" width={60} height={60} alt="java" />
					<span>Java</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/js.png" width={60} height={60} alt="js" />
					<span>Javascript</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/typescript.svg" width={60} height={60} alt="typescript" />
					<span>Typescript</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/aws-icon.webp" width={60} height={60} alt="aws" />
					<span>AWS</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/azure.png" width={60} height={60} alt="azure" />
					<span>Azure</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/node.png" width={60} height={60} alt="node" />
					<span>Node Js</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/physics.png" width={60} height={60} alt="physics" />
					<span>React</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/next.svg" width={60} height={60} alt="next" />
					<span>Next.js</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/sql-server.png" width={60} height={60} alt="sql" />
					<span>MySQL</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/database.png" width={60} height={60} alt="postgres" />
					<span>PostgreSQL</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/mui.jpeg" width={60} height={60} alt="mui" />
					<span>Material UI</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/tailwindcss.svg" width={60} height={60} alt="tailwind" />
					<span>Tailwind CSS</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/git.svg" width={60} height={60} alt="git" />
					<span>Git</span>
				</div>

				<div className="flex flex-row gap-2 justify-center items-center bg-slate-50 p-2 rounded">
					<Image src="/icons/getpostman.svg" width={60} height={60} alt="getpostman" />
					<span>Postman</span>
				</div>




			</div>

		</div>
	)
}