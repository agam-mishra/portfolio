import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css"
import { useState } from "react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Experience | Agam Mishra",
	description: "Agam Mishra Portfolio Project",
};

export default function Layout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<div className="experience">
			<div className={inter.className}>
				{children}
			</div>
		</div>
	);
}
