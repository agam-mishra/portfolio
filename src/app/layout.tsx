import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Home | Agam Mishra",
	description: "Agam Mishra Portfolio Project",
	icons: {
		icon: "/a.png", // Ensure favicon is in the public directory
		// Optionally, you can add other formats or sizes
		// apple: "/apple-touch-icon.png",
	},

};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/a.png" />
				<link rel="icon" type="image/png" href="/a.png" />
			</head>
			<body className={`${inter.className} px-4 lg:px-32`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
