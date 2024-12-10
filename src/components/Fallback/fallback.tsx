import { Card, CardContent, Typography, CardActions, Button } from "@mui/joy";
import { CardMedia, Skeleton } from "@mui/material";
const shimmer =
	'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function ProjectCardSkeleton() {
	return (
		<Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} className={`basis-full md:basis-1/2 ${shimmer}`}>
			<CardMedia
				sx={{ height: 140, maxWidth: 345 }}
			>
				<Skeleton
					animation="wave"
					height={140}
				/>
			</CardMedia>

			<CardContent>
				<Typography component="div">
					<Skeleton width="100%" height={60}>
						<Typography>.</Typography>
					</Skeleton>
				</Typography>
				<Typography component="div">
					<Skeleton width="100%" height={100}>
						<Typography>.</Typography>
					</Skeleton>
				</Typography>
				<div className="flex flex-col justify-left">
					<div className='text-sm flex flex-row items-center gap-4'>Created on : <Skeleton width={80} height={40}> </Skeleton></div>
					<div className='text-sm flex flex-row items-center gap-4'>Updated on : <Skeleton width={80} height={40}> </Skeleton></div>
				</div>
			</CardContent>

			<CardActions className='flex flex-row items-start justify-between'>
				<Button
					href={""}
					variant="outlined"
				>
					See Demo
				</Button>
				<Button
					href={""}
					variant="outlined"
				>
					Go to repository
				</Button>
			</CardActions>
		</Card>
	)
}