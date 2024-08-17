"use client";
import { Stepper, stepClasses, stepIndicatorClasses, typographyClasses, Step, StepIndicator, Stack } from "@mui/joy";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { useState } from "react";
import Image from 'next/image';

interface StepsProps {
	setShow: (value: string) => void;
}

export default function Steps(props: StepsProps) {
	const { setShow } = props;
	const [activeStep, setActiveStep] = useState<number | null>(null);

	const handleStepClick = (index: number, showValue: string) => {
		setActiveStep(index);
		setShow(showValue);
	};

	return (
		<Stepper
			orientation="vertical"
			sx={{
				'--Stepper-verticalGap': '8rem',
				'--StepIndicator-size': '2.5rem',
				'--Step-gap': '1rem',
				'--Step-connectorInset': '0.5rem',
				'--Step-connectorRadius': '1rem',
				'--Step-connectorThickness': '4px',
				'--joy-palette-success-solidBg': 'var(--joy-palette-success-400)',
				[`& .${stepClasses.completed}`]: {
					'&::after': { bgcolor: 'success.solidBg' },
				},
				[`& .${stepClasses.active}`]: {
					[`& .${stepIndicatorClasses.root}`]: {
						border: '4px solid',
						borderColor: '#fff',
						boxShadow: (theme) => `0 0 0 1px ${theme.vars.palette.primary[500]}`,
					},
				},
				[`& .${stepClasses.disabled} *`]: {
					color: 'neutral.softDisabledColor',
				},
				[`& .${typographyClasses['title-sm']}`]: {
					textTransform: 'uppercase',
					letterSpacing: '1px',
					fontSize: '10px',
				},
				'& .MuiStep-root:hover': { cursor: 'pointer' },
			}}
		>
			{[
				{ label: "App Dev Engineer 2", company: "NCR Atleos, Gurugram", duration: "July 2024 - Present", showValue: "sde2", image: "https://cdn.prod.website-files.com/64a2be73942e1d57fed077f3/6542574c8c3cdac8d63a601d_favicon-32x32.png" },
				{ label: "App Dev Engineer 1", company: "NCR Atleos, Gurugram", duration: "October 2023 - June 2024", showValue: "sde1a", image: "https://cdn.prod.website-files.com/64a2be73942e1d57fed077f3/6542574c8c3cdac8d63a601d_favicon-32x32.png" },
				{ label: "App Dev Engineer 1", company: "NCR Corporation, Gurugram", duration: "January 2022 - September 2023", showValue: "sde1v", image: "https://assets-global.website-files.com/65cce1f867021e739dcf43b2/65e7908bf2de77b03652e57b_favicon-32x32.png" },
				{ label: "App Dev Analyst", company: "NCR Corporation, Gurugram", duration: "May 2021 - December 2021", showValue: "analyst", image: "https://assets-global.website-files.com/65cce1f867021e739dcf43b2/65e7908bf2de77b03652e57b_favicon-32x32.png" },
				{ label: "Internships", company: "Various", duration: "", showValue: "internships", icon: <LightbulbIcon />, isInternship: true },
			].map((step, index) => (
				<Step
					key={index}
					active={activeStep === index}
					completed={activeStep !== null && activeStep !== index}
					onClick={() => handleStepClick(index, step.showValue)}
					sx={{
						opacity: activeStep === null || activeStep === index ? 1 : 0.3, // Dim non-active steps
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
						<Stack spacing={0}>
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
				</Step>
			))}
		</Stepper>
	);
}
