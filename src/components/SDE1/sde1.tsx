import Carousel from "../Carousel/carousel";

interface CompanyProp {
	company: String
}
export default function SDE1(props: CompanyProp) {
	const images = [
		"/IMG_3111.jpeg",
		"/IMG_3116.jpeg",
		"/IMG_3111.jpeg",
		"/IMG_3116.jpeg",
	];
	const company = props.company
	return (
		<div className="sde2-wrapper flex flex-col gap-8">
			<div className="text-center">
				<h1 className="text-3xl">Application Development Engineer 1</h1>
			</div>
			{company === "sde1a" && (
				<div className="flex flex-col gap-4">
					<span>
						After the separation of NCR Corporation into two distinct entities, I was aligned with NCR Atleos, where I took responsibility for the company's marketing technology. Given that our application served as the public face of the brand, I was tasked with quickly addressing a variety of improvement requests to minimize any potential impact on the brand's perception and functionality. In this role, I had to be agile and efficient in delivering updates, ensuring that the marketing technology kept pace with evolving needs.
					</span>
					<span>
						As time went on, I decided to transition to the Sales Technology team, recognizing that my skills and expertise aligned more closely with the future goals of the team. This move marked the beginning of a new chapter where I focused on tackling long-standing technical debt. One of the most significant challenges I faced during my initial days with the team was upgrading the application from Java 8 to Java 11. This was a crucial task, as the upgrade was expected to have a considerable impact on both the business operations and the overall system performance. It was a complex and high-stakes project, but I was determined to drive the upgrade smoothly to ensure the team's long-term success.
					</span>
				</div>
			)}
			{company === "sde1v" && (
				<div className="flex flex-col gap-4">
					<span>
						In my role, I was deeply involved in SEO optimization for NCR’s website, where I identified and addressed key security vulnerabilities and other issues that were affecting the site's performance. By implementing a series of targeted optimizations, I was able to improve the website’s SEO score significantly, bringing it to over 90+. This improvement not only enhanced the site's visibility and ranking but also provided a better user experience, making it more accessible and reliable for visitors.
					</span>
					<span>
						Alongside SEO work, I led a team in building a robust security solution using AWS WAF (Web Application Firewall). Our goal was to mitigate and block any attacks or malicious traffic that could affect the site. The security solution we implemented was highly successful, reducing attack rates by 90%, ensuring that the website could withstand external threats without compromising performance. This solution was crucial for protecting sensitive information and maintaining the trust of our users and stakeholders.
					</span>
					<span>
						Additionally, I automated the process of manually uploading data, which was previously done once a month. By transitioning this process to an automated, daily data refresh cycle, I significantly reduced the time and effort needed for updates. This improvement allowed us to provide real-time data, enabling the business to better understand and engage with site partners on a daily basis. Automating this process was critical for maintaining the integrity of the data and making sure that all stakeholders had the most up-to-date information to make informed decisions.
					</span>
					<span>
						Through these efforts, I not only enhanced the site's security and performance but also streamlined operations, saving time and improving the accuracy of critical business data.
					</span>
					<Carousel images={images} />
				</div>
			)}
		</div>
	);
}