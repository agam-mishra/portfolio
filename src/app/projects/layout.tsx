import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Projects | Agam Mishra",
	description: "Agam Mishra Portfolio Project",
};

export default function Layout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<div className="projects p-10">
			<div className={inter.className}>
				{children}
			</div>
		</div>
	);
}
