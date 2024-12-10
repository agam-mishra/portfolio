import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Image from 'next/image';

interface TabsProps {
	setShow: (value: string) => void;
	show: String;
}

export default function MobileTab(props: TabsProps) {
	const { setShow, show } = props;
	const [value, setValue] = useState(show === "about" ? "technology" : "sde2");

	const experiencesArr = [
		{
			label: "App Dev Engineer II",
			company: "NCR Atleos, Gurugram",
			duration: "July 2024 - Present",
			showValue: "sde2",
			image: "https://cdn.prod.website-files.com/64a2be73942e1d57fed077f3/6542574c8c3cdac8d63a601d_favicon-32x32.png"
		},
		{
			label: "App Dev Engineer I",
			company: "NCR Atleos, Gurugram",
			duration: "October 2023 - June 2024",
			showValue: "sde1a",
			image: "https://cdn.prod.website-files.com/64a2be73942e1d57fed077f3/6542574c8c3cdac8d63a601d_favicon-32x32.png"
		},
		{
			label: "App Dev Engineer I",
			company: "NCR Corporation, Gurugram",
			duration: "January 2022 - September 2023",
			showValue: "sde1v",
			image: "https://assets-global.website-files.com/65cce1f867021e739dcf43b2/65e7908bf2de77b03652e57b_favicon-32x32.png"
		},
		{
			label: "App Dev Analyst",
			company: "NCR Corporation, Gurugram",
			duration: "May 2021 - December 2021",
			showValue: "analyst",
			image: "https://assets-global.website-files.com/65cce1f867021e739dcf43b2/65e7908bf2de77b03652e57b_favicon-32x32.png"
		},
		{
			label: "Internships",
			company: "",
			duration: "",
			showValue: "internships",
			icon: <LightbulbIcon />,
			isInternship: true
		},
	]
	const aboutArr = [
		{
			label: "Technologies",
			showValue: "technology",
			icon: <CodeIcon fontSize="medium" />
		},
		// {
		// 	label: "Certifications",
		// 	showValue: "certifications",
		// 	icon: <WorkspacePremiumIcon />
		// },
		{
			label: "Services",
			showValue: "services",
			icon: <SchoolRoundedIcon fontSize="medium" />
		},
	]

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue)
		setShow(newValue);
	};

	return (
		<Box
			sx={{
				flexGrow: 1,
				maxWidth: { xs: "100%", sm: "100%" },
				bgcolor: 'rgb(229 229 229)',
			}}
		>
			<Tabs
				value={value}
				onChange={(event, newValue) => {
					handleChange(event, newValue);
				}}
				variant="scrollable"
				scrollButtons
				aria-label="tabs"
				sx={{
					[`& .${tabsClasses.scrollButtons}`]: {
						'&.Mui-disabled': { opacity: 0.3 },
					},
				}}
			>

				{(props.show === "experience") && (
					experiencesArr.map((step, index) => (
						<Tab key={index}
							value={step?.showValue}
							label={
								<div className="flex items-center justify-center flex-row gap-2 text-md">
									{step.image ? (
										<Image src={step?.image} alt="company_logo" width={16} height={16} />
									) : (step?.icon)
									}
									<div className="flex flex-col text-left">
										<span>{step?.label}</span>
										<span>{step.company}</span>
									</div>

								</div>
							}
						>
						</Tab>
					)))
				}

				{
					(props.show === "about") && (
						aboutArr.map((step, index) => (
							<Tab
								key={index}
								value={step?.showValue}
								label={
									<div className="flex items-center text-md">
										<span className="mr-1">{step?.icon}</span>
										{step?.label}
									</div>
								}
							/>
						))
					)
				}
			</Tabs>
		</Box>
	);
}
