"use client";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle/themeToggle";

export default function Home() {
	return (
		<div className="min-h-[85vh] flex flex-col justify-center px-4 py-8 sm:py-8">
			<div className="w-full max-w-4xl mx-auto">
			
				<div className="rounded-lg border border-[var(--border)] bg-[var(--bg-raised)] shadow-2xl shadow-black/10 overflow-hidden">
					{/* window chrome */}
					<div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
						<span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
						<span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
						<span className="w-3 h-3 rounded-full bg-[#27c93f]" />
						<span className="ml-3 font-mono text-xs text-[var(--fg-muted)]">
							agam@portfolio &mdash; zsh
						</span>
					</div>

					{/* terminal body */}
					<div className="px-6 sm:px-10 py-12 sm:py-16">
						<p className="font-mono text-sm sm:text-base text-[var(--accent)] mb-6 tracking-wide">
							<span className="text-[var(--fg-muted)]">$</span> whoami
						</p>

						<h1 className="font-mono text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-[var(--fg)]">
							Agam Mishra
						</h1>

						<p className="mt-4 font-mono text-base sm:text-lg text-[var(--fg-muted)]">
							<span className="text-[var(--accent-keyword)]">const</span> role
							{" "}=
							{" "}
							<span className="text-[var(--accent-string)]">
								&quot;Senior Software Developer @ VisionSure&quot;
							</span>
							;
						</p>

						<p className="mt-10 max-w-2xl text-lg sm:text-xl leading-relaxed text-[var(--fg)]">
							I architect and own backend systems for a healthcare-benefits
							platform &mdash; claims processing, secure authentication, and
							insurer API integrations &mdash; while driving infrastructure-as-code
							and security hardening across the platform.
						</p>

						<p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--fg-muted)]">
							Previously modernized legacy infrastructure at NCR Atleos:
							migrated SQL Server to PostgreSQL, moved on-prem systems to Azure,
							and cut infrastructure costs by ~30%.
						</p>

						<div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
							<Link
								href="/projects"
								className="group inline-flex items-center gap-2 font-mono text-sm sm:text-base font-semibold text-[var(--fg)] border-b-2 border-[var(--accent)] pb-1 transition-colors hover:text-[var(--accent)]"
							>
								./view-projects
								<span className="transition-transform group-hover:translate-x-1">&rarr;</span>
							</Link>

							<Link
								href="/contact"
								className="font-mono text-sm sm:text-base text-[var(--fg-muted)] border-b border-transparent pb-1 transition-colors hover:text-[var(--fg)] hover:border-[var(--fg-muted)]"
							>
								./get-in-touch
							</Link>

							<Link
								href="/asset/Agam_Mishra_Resume.pdf"
								className="font-mono text-sm sm:text-base text-[var(--fg-muted)] border-b border-transparent pb-1 transition-colors hover:text-[var(--fg)] hover:border-[var(--fg-muted)]"
								target="_blank"
							>
								./resume.pdf
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
