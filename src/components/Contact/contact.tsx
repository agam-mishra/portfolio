import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Image from 'next/image'

export default function Contact() {
	return (
		<div className="flex flex-col">
			<div className="flex justify-center items-center basis-full">
				<Image src="/contact.gif" height={200} width={200} alt=""></Image>
				Let's get in touch for some exciting endevaours together.
			</div>
			<div className="flex justify-center items-center w-full">
				<Card sx={{ minWidth: 600 }}>
					<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">

						<form className="space-y-8">
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
									id="subject"
									label="Subject"
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
		</div>
	)
}