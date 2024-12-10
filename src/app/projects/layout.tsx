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
		<div className="projects md:py-4 lg:py-10 p-2 bg-gradient-to-r from-slate-50 to-slate-200 rounded">
			<div className={inter.className}>
				{children}
			</div>
		</div>
	);
}
