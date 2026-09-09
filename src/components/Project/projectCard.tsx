import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { formatDate } from '@/utils/dateFormat';

interface ProjectCardProps {
	repo: {
		id: number;
		name: string;
		html_url: string;
		homepage: string;
		description: string | null;
		created_at: string;
		updated_at: string;
	};
}

export default function ProjectCard({ repo }: ProjectCardProps) {
	return (
		<Card
			sx={{
				maxWidth: 345,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				backgroundColor: 'var(--bg-raised)',
				border: '1px solid var(--border)',
				color: 'var(--fg)',
			}}
			className="w-full"
		>
			<CardMedia
				sx={{ height: 140 }}
				image="/images/project/project.svg"
				title="green iguana"
			/>
			<CardContent sx={{ flexGrow: 1 }}>
				<Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'var(--font-mono)', color: 'var(--fg)' }}>
					{repo?.name}
				</Typography>
				<Typography variant="body2" sx={{ color: 'var(--fg-muted)' }}>
					{repo?.description}
				</Typography>
			</CardContent>
			<CardContent sx={{ margin: "0", paddingY: "0" }}>
				<Typography className="text-sm" sx={{ color: 'var(--fg-muted)', fontFamily: 'var(--font-mono)' }}>Created on: {formatDate(repo.created_at)}</Typography>
				<Typography className="text-sm" sx={{ color: 'var(--fg-muted)', fontFamily: 'var(--font-mono)' }}>Updated on: {formatDate(repo.updated_at)}</Typography>
			</CardContent>
			<CardActions sx={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
				<Button
					href={repo?.homepage}
					size="small"
					target="_blank"
					rel="noopener noreferrer"
					variant="outlined"
					sx={{
						fontFamily: 'var(--font-mono)',
						color: 'var(--accent-string)',
						borderColor: 'var(--accent-string)',
						'&:hover': { borderColor: 'var(--accent-string)', backgroundColor: 'transparent', opacity: 0.8 },
					}}
				>
					See Demo
				</Button>
				<Button
					href={repo?.html_url}
					size="small"
					target="_blank"
					rel="noopener noreferrer"
					variant="outlined"
					sx={{
						fontFamily: 'var(--font-mono)',
						color: 'var(--accent)',
						borderColor: 'var(--accent)',
						'&:hover': { borderColor: 'var(--accent)', backgroundColor: 'transparent', opacity: 0.8 },
					}}
				>
					Go to repository
				</Button>
			</CardActions>
		</Card>

	)
}
