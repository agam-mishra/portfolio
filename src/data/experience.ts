export interface InternshipEntry {
	title: string;
	company: string;
	duration: string;
	bullets: string[];
}

export interface ExperienceRole {
	id: string;
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	image?: string;
	logoBg?: string;
	bullets: string[];
	note?: string;
	isInternship?: boolean;
	internships?: InternshipEntry[];
}

const NCR_LOGO =
	"https://cdn.prod.website-files.com/64a2be73942e1d57fed077f3/6542574c8c3cdac8d63a601d_favicon-32x32.png";
const NCR_CORP_LOGO =
	"https://assets-global.website-files.com/65cce1f867021e739dcf43b2/65e7908bf2de77b03652e57b_favicon-32x32.png";

export const experienceRoles: ExperienceRole[] = [
	{
		id: "visionsure",
		title: "Senior Software Developer",
		company: "VisionSure",
		location: "Gurugram",
		startDate: "March 2025",
		endDate: "Present",
		image: "/icons/visionsure.svg",
		logoBg: "#4F2860",
		bullets: [
			"Own architecture and delivery of the platform's core backend services — policy lifecycle, claims, authentication, and benefits calculation — including designing a new claims-processing module from the ground up (file storage, data persistence, eligibility validation), cutting manual processing effort by 50%.",
			"Lead REST API design for insurer and partner integrations (ICICI Lombard, Niva Bupa, Aditya Birla Health, Zurich Kotak, Loop Health), working directly with partner engineering teams to translate business requirements into scalable technical solutions — improving partner onboarding speed by 35%.",
			"Redesigned authentication and session architecture (SSO, Cognito-based identity, OTP verification), resolving 90%+ of critical findings from a third-party security audit and closing recurring session-management vulnerabilities.",
			"Raised engineering quality standards by introducing containerized integration testing and leading dependency/runtime hardening across services — improving release stability by 25% and cutting API failure rates by 30%.",
			"Built Infrastructure-as-Code (AWS CDK) across the platform — API gateway, monitoring, disaster-recovery infrastructure, and automated access-key rotation/expiry.",
			"Owned technical documentation for the platform, authoring internal architecture references alongside partner-facing API integration guides (booking, SSO).",
			"Independently rebuilt the platform's frontend architecture (CSR to SSR) and later took ownership of the company's public web platform in parallel with backend duties — improving page-load performance by 20% and enabling embedded partner experiences (MediBuddy, AssureKit, HealthAssure).",
		],
	},
	{
		id: "sde2",
		title: "App Dev Engineer II",
		company: "NCR Atleos",
		location: "Gurugram",
		startDate: "July 2024",
		endDate: "March 2025",
		image: NCR_LOGO,
		bullets: [
			"Drove cross-team collaboration for a TSA (Transition Service Agreement) exit — including helping teammates get Azure infra access — removing dependency on an external org for legacy application management.",
			"Led migration of customer billing to Zuora, eliminating dependency on outdated systems and streamlining billing operations.",
			"Migrated on-prem applications to Azure Cloud, achieving ~30% cost savings post-TSA.",
			"Currently: migrating SQL Server to PostgreSQL, restructuring legacy APIs, and upgrading the stack to Next.js.",
		],
		note: "Beyond the role: active member of the Gurgaon location's cultural team, contributing to employee engagement initiatives.",
	},
	{
		id: "sde1a",
		title: "App Dev Engineer I",
		company: "NCR Atleos",
		location: "Gurugram",
		startDate: "October 2023",
		endDate: "June 2024",
		image: NCR_LOGO,
		bullets: [
			"Aligned with NCR Atleos following the NCR corporate split; owned marketing technology (public-facing brand app), delivering improvement requests via agile sprints.",
			"Transitioned to the Sales Technology team; upgraded a business-critical application from Java 8 to Java 11, resolving longstanding technical debt with minimal disruption to business operations.",
		],
	},
	{
		id: "sde1v",
		title: "App Dev Engineer I",
		company: "NCR Corporation",
		location: "Gurugram",
		startDate: "January 2022",
		endDate: "September 2023",
		image: NCR_CORP_LOGO,
		bullets: [
			"Led SEO and security remediation for NCR's corporate website, fixing vulnerabilities and raising the SEO score to 90+.",
			"Led a team building an AWS WAF security solution, reducing attack rates by 90%.",
			"Automated a manual monthly data upload into a daily automated refresh, enabling real-time data access for stakeholders.",
		],
	},
	{
		id: "analyst",
		title: "App Dev Analyst",
		company: "NCR Corporation",
		location: "Gurugram",
		startDate: "May 2021",
		endDate: "December 2021",
		image: NCR_CORP_LOGO,
		bullets: [
			"Built an AWS CloudWatch alerting system for service failures, enabling proactive monitoring and faster incident response.",
			"Collaborated on migrating AEM (Adobe Experience Manager) to Webflow, streamlining content management and reducing technical complexity for content updates.",
		],
	},
	{
		id: "internships",
		title: "Internships",
		company: "",
		location: "",
		startDate: "",
		endDate: "",
		bullets: [],
		isInternship: true,
		internships: [
			{
				title: "Software Developer",
				company: "XeliumTech Solutions, Gurugram",
				duration: "February 2021 - May 2021",
				bullets: [
					"Assisted in developing and maintaining backend infrastructure for a doctor-patient appointment management application, integrating third-party APIs and collaborating with front-end developers within an Agile framework.",
					"Built a scalable, high-performance backend using PHP and MySQL, applying debugging and troubleshooting skills to maintain optimal functionality and performance.",
				],
			},
			{
				title: "Software Intern",
				company: "Advanced Systemics, Delhi",
				duration: "October 2019 - July 2020",
				bullets: [
					"Built responsive, user-friendly frontend interfaces for websites serving US and European government clients, collaborating with cross-functional teams to meet project-specific standards.",
					"Gained hands-on experience with HTML, CSS, JavaScript, and React, focusing on performance optimization, accessibility, and SEO best practices.",
				],
			},
			{
				title: "Software Intern",
				company: "Advanced Systemics, Delhi",
				duration: "June 2018 - July 2018",
				bullets: [
					"Built responsive, user-friendly frontend interfaces for websites serving US and European government clients, collaborating with cross-functional teams to meet project-specific standards.",
					"Gained hands-on experience with HTML, CSS, JavaScript, and React, focusing on performance optimization, accessibility, and SEO best practices.",
				],
			},
		],
	},
];

export function getExperienceRole(id: string): ExperienceRole | undefined {
	return experienceRoles.find((role) => role.id === id);
}
