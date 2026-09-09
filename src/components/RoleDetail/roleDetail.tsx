import { getExperienceRole } from "@/data/experience";
import Carousel from "@/components/Carousel/carousel";

interface RoleDetailProps {
	id: string;
}

const carouselImages = [
	"/images/sde2/IMG_3118.jpg",
	"/images/sde2/IMG_3116.jpg",
	"/images/sde2/IMG_3111.jpg",
];

export default function RoleDetail({ id }: RoleDetailProps) {
	const role = getExperienceRole(id);
	if (!role) return null;

	if (role.isInternship) {
		return (
			<div className="flex flex-col gap-16">
				<p className="font-mono text-sm text-[var(--accent)] text-center -mb-8">{"// experience"}</p>
				{role.internships?.map((entry, i) => (
					<div key={i} className="flex flex-col gap-2">
						<h2 className="font-mono text-2xl font-bold tracking-tight text-[var(--fg)] border-b border-[var(--border)] pb-2">
							{entry.company} &mdash; {entry.title}
						</h2>
						<p className="font-mono text-xs text-[var(--fg-muted)]">{entry.duration}</p>
						{entry.bullets.map((bullet, j) => (
							<p key={j} className="font-mono text-sm text-[var(--fg-muted)] leading-relaxed">
								{bullet}
							</p>
						))}
					</div>
				))}
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-8">
			<div className="text-center">
				<p className="font-mono text-sm text-[var(--accent)] mb-2">{"// experience"}</p>
				<h1 className="font-mono text-3xl font-bold tracking-tight text-[var(--fg)]">
					{role.title}
				</h1>
				<p className="font-mono text-sm text-[var(--fg-muted)] mt-1">
					{role.company}
					{role.location ? `, ${role.location}` : ""} &middot; {role.startDate} - {role.endDate}
				</p>
			</div>

			<div className="flex flex-col gap-4 font-mono text-sm text-[var(--fg-muted)] leading-relaxed">
				{role.bullets.map((bullet, i) => (
					<p key={i}>{bullet}</p>
				))}
			</div>

			{role.note && (
				<p className="font-mono text-sm text-[var(--fg-muted)] italic border-t border-[var(--border)] pt-4">
					{role.note}
				</p>
			)}

			{(role.id === "sde2" || role.id === "sde1a" || role.id === "sde1v") && (
				<Carousel images={carouselImages} />
			)}
		</div>
	);
}
