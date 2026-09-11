import type { Metadata } from "next";
import "./../globals.css";

export const metadata: Metadata = {
  title: "About | Agam Mishra",
  description: "Agam Mishra Portfolio Project",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="about">{children}</div>;
}
