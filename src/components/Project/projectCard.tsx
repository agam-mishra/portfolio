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
		<Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} className="basis-full md:basis-1/2">
			<CardMedia
				sx={{ height: 140 }}
				image="/images/project/project.svg"
				title="green iguana"
			/>
			<CardContent sx={{ flexGrow: 1 }}>
				<Typography gutterBottom variant="h5" component="div">
					{repo?.name}
				</Typography>
				<Typography variant="body2" sx={{ color: 'text.secondary' }}>
					{repo?.description}
				</Typography>
			</CardContent>
			<CardContent sx={{ margin: "0", paddingY: "0" }}>
				<Typography className="text-sm">Created on: {formatDate(repo.created_at)}</Typography>
				<Typography className="text-sm">Updated on: {formatDate(repo.updated_at)}</Typography>
			</CardContent>
			<CardActions sx={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
				<Button
					href={repo?.homepage}
					size="small"
					target="_blank"
					rel="noopener noreferrer"
					color="error"
					variant="outlined"
				>
					See Demo
				</Button>
				<Button
					href={repo?.html_url}
					size="small"
					target="_blank"
					rel="noopener noreferrer"
					variant="outlined"
				>
					Go to repository
				</Button>
			</CardActions>
		</Card>

	)
}
