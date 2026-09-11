import type { Metadata } from "next";
import "./../globals.css";

export const metadata: Metadata = {
  title: "Projects | Agam Mishra",
  description: "Agam Mishra Portfolio Project",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="projects md:py-4 lg:py-10 p-2 bg-[var(--bg)] rounded">
      {children}
    </div>
  );
}
