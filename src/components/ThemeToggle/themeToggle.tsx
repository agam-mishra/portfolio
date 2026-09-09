"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const [isDark, setIsDark] = useState<boolean | null>(null);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from DOM class set before hydration (see inline theme script)
		setIsDark(document.documentElement.classList.contains("dark"));
	}, []);

	const toggle = () => {
		const next = !document.documentElement.classList.contains("dark");
		document.documentElement.classList.toggle("dark", next);
		try {
			localStorage.setItem("theme", next ? "dark" : "light");
		} catch (e) {}
		setIsDark(next);
	};

	if (isDark === null) {
		return <div className="w-16 h-8" aria-hidden />;
	}

	return (
		<button
			onClick={toggle}
			aria-label="Toggle color theme"
			className="font-mono text-xs px-3 py-1.5 rounded border border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:border-[var(--fg-muted)] transition-colors"
		>
			{isDark ? "○ light" : "● dark"}
		</button>
	);
}
