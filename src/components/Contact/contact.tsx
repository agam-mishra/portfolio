import { ButtonGroup, CardActions, CardOverflow, Chip, IconButton, SvgIcon } from '@mui/joy';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/joy/Typography';
import Image from 'next/image'
import Box from '@mui/material/Box';
import { GitHub, Instagram, LinkedIn, Mail, Twitter } from '@mui/icons-material';
import Link from 'next/link';


export default function Contact() {
	return (
		<div className="flex flex-col gap-6 md:p-2">
			<div className="flex max-md:flex-col items-center justify-center text-center gap-4">
				<Image
					src="/contact.gif"
					height={200}
					width={200}
					alt="Contact animation"
					unoptimized
				/>
				<Typography level="h4" className="text-lg font-semibold">
					{"Let's get in touch for some exciting endeavours together."}
				</Typography>
			</div>

			<div className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-center items-center">
				<div className="flex justify-center items-center flex-1 w-full max-w-sm">
					<Card sx={{ width: '100%', boxShadow: 'lg' }}>
						<CardContent className="flex flex-col lg:flex-row items-center gap-4">
							<Image
								src="/agam.jpeg"
								alt="Agam Mishra"
								width={200}
								height={200}
								className="rounded-full"
							/>
							<Typography level="h1" className="text-center lg:text-left">
								Agam Mishra
							</Typography>
						</CardContent>
						<CardContent className="socials flex flex-col gap-2 pt-4">
							<Typography level="body-md">
								<a href="mailto:agammishra05@gmail.com" className="flex items-center text-inherit no-underline">
									<Mail className="mr-2" /> agammishra05@gmail.com
								</a>
							</Typography>
							<Typography level="body-md">
								<GitHub />{' '}
								<Link href="https://github.com/agam-mishra/">agam-mishra</Link>
							</Typography>
							<Typography level="body-md">
								<LinkedIn />{' '}
								<Link href="https://www.linkedin.com/in/agammishra">
									Agam Mishra
								</Link>
							</Typography>
							<Typography level="body-md">
								<Instagram />{' '}
								<Link href="https://www.instagram.com/agam_mishra">
									@agam_mishra
								</Link>
							</Typography>
							<Typography level="body-md">
								<Twitter />{' '}
								<Link href="https://x.com/agammishra10">@agammishra10</Link>
							</Typography>
						</CardContent>
					</Card>
				</div>

				<div className="flex justify-center items-center flex-1 w-full max-w-lg">
					<Card className="w-full">
						<div className="p-4">
							<form className="space-y-6">
								<TextField
									id="name"
									label="Your Name"
									variant="outlined"
									fullWidth
									required
								/>
								<TextField
									id="email"
									label="Your Email"
									variant="outlined"
									fullWidth
									required
								/>
								<TextField
									id="message"
									label="Your Message"
									multiline
									rows={6}
									variant="outlined"
									fullWidth
									required
								/>
								<div className="text-right">
									<Button
										type="submit"
										variant="contained"
										color="primary"
										className="w-fit mx-auto"
									>
										Send Message
									</Button>
								</div>
							</form>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
