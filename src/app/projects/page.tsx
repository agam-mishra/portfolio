'use client';

import React, { useEffect, useState } from 'react';
import ProjectCard from '@/components/Project/projectCard';
import { ProjectCardSkeleton } from '@/components/Fallback/fallback';

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

	const fetchRepos = async () => {
		try {
			const response = await fetch('/api/getRepos', {
				cache: 'no-store',
			});

			if (!response.ok) {
				const errorData = await response.json();
				setError(errorData.error || 'Failed to fetch repositories');
				return;
			}

			const data = await response.json();
			setRepos(data);
		} catch (error) {
			setError('An error occurred while fetching repositories');
			console.error('Error:', error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchRepos();
		const timer = setTimeout(() => {
			fetchRepos();
		}, 100000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="project flex flex-row gap-4 flex-wrap justify-center">
			{error && <p className="error">{error}</p>}
			{isLoading ? (
				<>
					<ProjectCardSkeleton />
					<ProjectCardSkeleton />
					<ProjectCardSkeleton />
				</>
			) : repos.length > 0 ? (
				repos.map((repo) => <ProjectCard key={repo.id} repo={repo} />)
			) : (
				<p>No repositories found.</p>
			)}
		</div>
	);
}
