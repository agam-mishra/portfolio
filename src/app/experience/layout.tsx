import type { Metadata } from "next";
import "./../globals.css";

export const metadata: Metadata = {
  title: "Experience | Agam Mishra",
  description: "Agam Mishra Portfolio Project",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="experience">{children}</div>;
}
