import Link from "next/link";

export default function Header() {
	return (
		<div className="header mt-6 mb-16 mx-20 flex justify-between text-xl">
			<div>
				<Link href={"/"} className="text-lg	">
					&lt;agamMishra /&gt;
				</Link>
			</div>

			<div className="navigation-wrap">
				<nav className="flex gap-10">
					<Link href={"/experience"}>Experience</Link>
					<Link href={"/education"}>Education</Link>
					<Link href={"/projects"}>Projects</Link>
					<Link href={"/contact"}>Contact</Link>
				</nav>
			</div>
		</div>
	)
}