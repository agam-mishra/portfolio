import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Home | Agam Mishra",
	description: "Agam Mishra Portfolio Project",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-red px-32`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
