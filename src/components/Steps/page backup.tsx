"use client";
import { Stepper, stepClasses, stepIndicatorClasses, typographyClasses, Step, StepIndicator, Stack } from "@mui/joy";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { useState } from "react";
import Image from 'next/image';
import { StepConnector } from "@mui/material";
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CodeIcon from '@mui/icons-material/Code';

interface StepsProps {
	setShow: (value: string) => void;
	show: String;
}

export default function Steps(props: StepsProps) {
	const { setShow, show } = props;
	const [activeStep, setActiveStep] = useState<number | null>(0);
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
	const educationArr = [
		{
			label: "Bachelors of Technology",
			institution: "SRM University, Sonepat, Haryana",
			duration: "August 2016 - May 2020",
			showValue: "btech",
			image: ""
		},
		{
			label: "Higher Secondary School",
			institution: "Tecnia International, Delhi",
			duration: "2014 - 2016",
			showValue: "hsc",
			image: "https://cdn.prod.website-files.com/64a2be73942e1d57fed077f3/6542574c8c3cdac8d63a601d_favicon-32x32.png"
		},
		{
			label: "Secondary School",
			institution: "Tecnia International, Delhi",
			duration: "2014",
			showValue: "sc",
			image: "https://cdn.prod.website-files.com/64a2be73942e1d57fed077f3/6542574c8c3cdac8d63a601d_favicon-32x32.png"
		},
	]

	const aboutArr = [
		{
			label: "Technologies I Work With",
			showValue: "technology",
			icon: <CodeIcon fontSize="large" />
		},
		// {
		// 	label: "Certifications",
		// 	showValue: "certifications",
		// 	icon: <WorkspacePremiumIcon />
		// },
		{
			label: "Services",
			showValue: "services",
			icon: <SchoolRoundedIcon fontSize="large" />
		},
	]


	// Function to scroll the right content to the top
	const scrollToTop = () => {
		const rightContent = document.getElementById('right-content');
		if (rightContent) {
			rightContent.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	const handleStepClick = (index: number, showValue: string) => {
		setActiveStep(index);
		setShow(showValue);
		scrollToTop();
	};

	return (
		<Stepper
			orientation="vertical"
			sx={{
				'--Stepper-verticalGap': '6rem',
				'--StepIndicator-size': '2.5rem',
				'--Step-gap': '1rem',
				'--Step-connectorInset': '0.5rem',
				'--Step-connectorRadius': '1rem',
				'--Step-connectorThickness': '0px',
				'--joy-palette-success-solidBg': 'var(--joy-palette-success-400)',
				'maxHeight': 'min-content',
				[`& .${stepClasses.active}`]: {
					[`& .${stepIndicatorClasses.root}`]: {
						border: '4px solid',
						borderColor: '#fff',
						boxShadow: (theme) => `0 0 0 1px ${theme.vars.palette.primary[500]}`,
					},
				},
				[`& .${typographyClasses['title-sm']}`]: {
					textTransform: 'uppercase',
					letterSpacing: '1px',
					fontSize: '10px',
				},
				'& .MuiStep-root:hover': { cursor: 'pointer' },
			}}
		>
			{(props.show === "experience") && (
				experiencesArr.map((step, index) => (
					<Step
						key={index}
						active={activeStep === index}
						completed={activeStep !== null && activeStep !== index}
						onClick={() => handleStepClick(index, step.showValue)}
						sx={{
							opacity: activeStep === null || activeStep === index ? 1 : 0.3,
							paddingLeft: "5px"
						}}
						indicator={
							step.image ? (
								<StepIndicator variant="soft" color="success">
									<Image src={step.image} alt="company_logo" width={32} height={32} />
								</StepIndicator>
							) : (
								<StepIndicator variant="soft" color="neutral">
									{step.icon}
								</StepIndicator>
							)
						}
					>
						<div className="flex flex-col">
							<span className="text-lg">{step.label}</span>
							<span className="text-xs">{step.company}</span>
							{step.duration && <span className="text-xs">{step.duration}</span>}
						</div>
						{step.isInternship && (
							<Stack spacing={1}>
								<div className="flex flex-col">
									<span className="text-base">Software Intern</span>
									<span className="text-sm">XeliumTech Solutions, Gurugram</span>
									<span className="text-xs">February 2021 - May 2021</span>
								</div>
								<div className="flex flex-col">
									<span className="text-base">Software Intern</span>
									<span className="text-sm">Advanced Systemics, Delhi</span>
									<span className="text-xs">October 2019 - July 2020</span>
								</div>
								<div className="flex flex-col">
									<span className="text-base">Software Intern</span>
									<span className="text-sm">Advanced Systemics, Delhi</span>
									<span className="text-xs">June 2018 - July 2018</span>
								</div>
							</Stack>
						)}
						{/* {!step.isInternship && (
							<StepConnector
								sx={{
									display: index === experiencesArr.length - 1 ? 'none' : 'block', // Hide connector for last step
								}}
							/>
						)} */}
					</Step>
				))
			)
			}

			{
				(props.show === "about") && (
					aboutArr.map((step, index) => (
						<Step
							key={index}
							active={activeStep === index}
							completed={activeStep !== null && activeStep !== index}
							onClick={() => handleStepClick(index, step.showValue)}
							sx={{
								opacity: activeStep === null || activeStep === index ? 1 : 0.3, // Dim non-active steps
							}}
							indicator={
								step?.icon
							}
						>
							<div className="flex flex-col">
								<span className="text-lg">{step.label}</span>
							</div>
						</Step>
					))
				)
			}
		</Stepper >
	);
}
