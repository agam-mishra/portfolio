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
		<div className="flex flex-col">
			<div className="flex justify-center items-center basis-full">
				<Image src="/contact.gif" height={200} width={200} alt=""></Image>
				Let's get in touch for some exciting endevaours together.
			</div>
			<div className="flex gap-20 justify-center items-center">
				<div className="flex justify-center items-center flex-1/2">
					<Card sx={{ minWidth: 600 }}>
						<div className="py-8 lg:py-4 px-4 mx-auto max-w-screen-md">
							<form className="space-y-8">
								<div>
									<TextField
										id="name"
										label="Your Name"
										variant="outlined"
										fullWidth
										required
										className=""
									/>
								</div>
								<div>
									<TextField
										id="email"
										label="Your Email"
										variant="outlined"
										fullWidth
										required
										className=""
									/>
								</div>
								<div>
									<TextField
										id="message"
										label="Your Message"
										multiline
										rows={6}
										variant="outlined"
										fullWidth
										required
										className=""
									/>
								</div>
								<Button
									type="submit"
									variant="contained"
									color="primary"
									className="w-full sm:w-fit "
								>
									Send Message
								</Button>
							</form>
						</div>
					</Card>
				</div>
				<div className="flex-1/2 justify-center items-center">
					<Card sx={{ width: 400, boxShadow: 'lg', minHeight: "100%" }}>
						<CardContent className='flex gap-8 items-center '>
							<Image src="/agam.jpeg" alt={'agam'} width={200} height={200} className='rounded' />
							<Typography level="h1">Agam Mishra</Typography>
						</CardContent>
						<CardContent className="socials flex flex-col gap-2 pt-4">
							<Typography level="body-md"><Mail /> agammishra05@gmail.com</Typography>
							<Typography level="body-md"><GitHub /> <Link href={'https://github.com/agam-mishra/'}>agam-mishra</Link></Typography>
							<Typography level="body-md"><LinkedIn /> <Link href={'https://www.linkedin.com/in/agammishra'}>Agam Mishra</Link></Typography>
							<Typography level="body-md"><Instagram /> <Link href={'https://www.instagram.com/agam_mishra'}>@agam_mishra</Link></Typography>
							<Typography level="body-md"><Twitter /> <Link href={'https://x.com/agammishra10'}>@agammishra10 </Link></Typography>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}