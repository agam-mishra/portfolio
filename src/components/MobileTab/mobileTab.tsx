import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Image from 'next/image';
import { experienceRoles } from '@/data/experience';

interface TabsProps {
	setShow: (value: string) => void;
	show: String;
}

export default function MobileTab(props: TabsProps) {
	const { setShow, show } = props;
	const [value, setValue] = useState(show === "about" ? "technology" : "visionsure");

	const experiencesArr = experienceRoles.map((role) =>
		role.isInternship
			? {
					label: role.title,
					company: "",
					duration: "",
					showValue: role.id,
					icon: <LightbulbIcon />,
					isInternship: true,
				}
			: {
					label: role.title,
					company: `${role.company}${role.location ? `, ${role.location}` : ""}`,
					duration: `${role.startDate} - ${role.endDate}`,
					showValue: role.id,
					image: role.image,
					logoBg: role.logoBg,
				}
	);
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
				bgcolor: 'var(--bg-raised)',
				border: '1px solid var(--border)',
				borderRadius: '0.5rem',
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
					fontFamily: 'var(--font-mono)',
					[`& .${tabsClasses.scrollButtons}`]: {
						'&.Mui-disabled': { opacity: 0.3 },
						color: 'var(--fg-muted)',
					},
					'& .MuiTab-root': {
						color: 'var(--fg-muted)',
						fontFamily: 'var(--font-mono)',
					},
					'& .MuiTab-root.Mui-selected': {
						color: 'var(--accent)',
					},
					'& .MuiTabs-indicator': {
						backgroundColor: 'var(--accent)',
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
										<span
											className="inline-flex items-center justify-center rounded-sm"
											style={step.logoBg ? { backgroundColor: step.logoBg, padding: 2 } : undefined}
										>
											<Image src={step?.image} alt="company_logo" width={16} height={16} />
										</span>
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
