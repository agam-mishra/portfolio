import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Image from 'next/image';

const cardSx = {
	backgroundColor: 'var(--bg-raised)',
	borderColor: 'var(--border)',
	color: 'var(--fg)',
};

export default function Services() {
	return (
		<div className="services-wrapper grid md:grid-cols-2 gap-4 justify-self-center">
			<p className="font-mono text-sm text-[var(--accent)] md:col-span-2 -mb-2">{"// services"}</p>
			<div className="basis-1/2 sm:order-1 order-1">
				<Card variant="outlined" sx={cardSx}>
					<CardContent className="p-4 items-center">
						<Image src="/images/services/cloud.png" width={100} height={100} alt="cloud" />
						<Typography level="title-lg" sx={{ color: 'var(--accent)' }} className="mb-3 font-mono">Empowering Businesses with Cloud Solutions</Typography>
						<Typography sx={{ color: 'var(--fg-muted)' }}>I am skilled in leveraging cloud technologies to help businesses seamlessly transition from on-premises infrastructure to the cloud. With a focus on scalability, security, and efficiency, I design and implement tailored cloud solutions that align with organizational goals. My expertise includes cloud migration strategies, optimizing existing architectures, and building innovative solutions to support business growth and agility in a rapidly evolving digital landscape.</Typography>
					</CardContent>
				</Card>
			</div>
			<div className="basis-1/2 sm:order-2 order-2">
				<Card variant="outlined" sx={cardSx}>
					<CardContent className="p-4 items-center">
						<Image src="/images/services/application.png" width={100} height={100} alt="application" />
						<Typography level="title-lg" sx={{ color: 'var(--accent)' }} className="mb-3 font-mono">
							Building Dynamic Web Solutions with Modern Technologies
						</Typography>
						<Typography sx={{ color: 'var(--fg-muted)' }}>{"I specialize in building dynamic and high-performance web applications using modern technologies like React, Next.js, and Node.js. By leveraging the power of these tools, I create seamless user experiences and scalable backend systems that meet business needs. Whether it's creating responsive UIs with Tailwind CSS and Material UI, developing robust APIs, or optimizing performance, I focus on delivering fast, reliable, and user-centric solutions."}</Typography>
					</CardContent>
				</Card>
			</div>
			<div className="basis-1/2 sm:order-3 order-4">
				<Card variant="outlined" sx={cardSx}>
					<CardContent className="p-4 items-center">
						<Image src="/images/services/backend.png" width={100} height={100} alt="backend" />
						<Typography level="title-lg" sx={{ color: 'var(--accent)' }} className="mb-3 font-mono">
							Backend Development
						</Typography>
						<Typography sx={{ color: 'var(--fg-muted)' }}>{"I specialize in backend development, leveraging robust technologies such as Java, Node.js, Express, and Python to build scalable, high-performance applications. By translating designers' concepts into reality, I create efficient backend systems that integrate seamlessly with databases and third-party APIs. My expertise includes ensuring data integrity, security, and system scalability, while optimizing performance to meet business requirements. Whether it's building RESTful APIs, handling complex data processing, or implementing cloud-based solutions, I provide reliable backend architecture that supports both user experience and business growth."}</Typography>
					</CardContent>
				</Card>
			</div>
			<div className="basis-1/3 sm:order-4 order-3">
				<Card variant="outlined" sx={cardSx}>
					<CardContent className="p-4 items-center">
						<Image src="/images/services/consultation.png" width={100} height={100} alt="consultation" />
						<Typography level="title-lg" sx={{ color: 'var(--accent)' }} className="mb-3 font-mono">Cloud Solutions for Startups</Typography>
						<Typography sx={{ color: 'var(--fg-muted)' }}>I provide cloud-based solutions for small businesses. I help businesses deploy websites, scale applications, and optimize performance with minimal infrastructure management. My services include cloud hosting consultation, site deployment, code reviews, and performance optimization to ensure reliable, cost-effective solutions for growth and digital transformation.
							Additionally, I offer consultations on code reviews, performance optimization, and best practices for building and maintaining web applications. My goal is to ensure that small businesses can access reliable, cost-effective solutions that support their growth and digital transformation.
						</Typography>
					</CardContent>
				</Card>
			</div>

		</div>
	)
}