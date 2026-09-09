import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";
import { themeInitScript } from "@/components/ThemeToggle/themeScript";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

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
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/a.png" />
				<link rel="icon" type="image/png" href="/a.png" />
				<script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
			</head>
			<body className={`${inter.className} ${jetbrainsMono.variable} px-2 lg:px-32 bg-[var(--bg)] text-[var(--fg)]`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
