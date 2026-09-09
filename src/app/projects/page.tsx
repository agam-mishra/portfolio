'use client';

import React, { useEffect, useState } from 'react';
import ProjectCard from '@/components/Project/projectCard';
import { ProjectCardSkeleton } from '@/components/Fallback/fallback';
import Reveal from '@/components/Reveal/reveal';

interface Repo {
	id: number;
	name: string;
	html_url: string;
	homepage: string;
	description: string | null;
	created_at: string;
	updated_at: string;
}

export default function ProjectPage() {
	const [repos, setRepos] = useState<Repo[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		let cancelled = false;

		const fetchRepos = async () => {
			try {
				const response = await fetch('/api/getRepos');

				if (!response.ok) {
					const errorData = await response.json();
					if (!cancelled) setError(errorData.error || 'Failed to fetch repositories');
					return;
				}

				const data = await response.json();
				if (!cancelled) setRepos(data);
			} catch (error) {
				if (!cancelled) setError('An error occurred while fetching repositories');
				console.error('Error:', error);
			} finally {
				if (!cancelled) setIsLoading(false);
			}
		};

		fetchRepos();
		const timer = setTimeout(() => {
			fetchRepos();
		}, 2000);

		return () => {
			cancelled = true;
			clearTimeout(timer);
		};
	}, []);

	return (
		<div className="project flex flex-col gap-6">
			<p className="font-mono text-sm text-[var(--accent)] text-center">{"// projects"}</p>
			<div className="flex flex-row gap-4 flex-wrap justify-center">
			{error && <p className="text-[var(--fg-muted)]">{error}</p>}
			{isLoading ? (
				<>
					<ProjectCardSkeleton />
					<ProjectCardSkeleton />
					<ProjectCardSkeleton />
				</>
			) : repos.length > 0 ? (
				repos.map((repo, i) => (
					<Reveal key={repo.id} delay={Math.min(i, 5) * 80} className="basis-full md:basis-1/2">
						<ProjectCard repo={repo} />
					</Reveal>
				))
			) : (
				<p className="text-[var(--fg-muted)]">No repositories found.</p>
			)}
			</div>
		</div>
	);
}
