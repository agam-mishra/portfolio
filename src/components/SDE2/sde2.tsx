import Carousel from "../Carousel/carousel";

export default function SDE2() {
	const images = [
		"/IMG_3111.jpeg",
		"/IMG_3116.jpeg",
		"/IMG_3111.jpeg",
		"/IMG_3116.jpeg",
	];
	return (
		<div className="sde2-wrapper flex flex-col gap-8">
			<div className="text-center">
				<h1 className="text-3xl">Application Development Engineer II</h1>
			</div>
			<div className="flex flex-col gap-2">
				<span>
					Starting this position opened up new opportunities for me within the organization. I quickly took on responsibilities, including assisting other team members in gaining Azure infrastructure access and fostering collaboration across teams to ensure a seamless TSA (Transition Service Agreement) exit. This exit was a crucial milestone for our organization, as it removed dependencies on an external organization and resulted in significant cost and resource savings previously devoted to managing legacy applications.
				</span>
				<span>
					In parallel, I worked on a project that transitioned customer billing processes to Zuora, effectively eliminating dependencies on outdated systems and streamlining our billing operations. This effort not only improved operational efficiency but also laid the foundation for more scalable and automated billing solutions.
				</span>
				<span>
					I am also an active member of the cultural team for our Gurgaon location, contributing to employee engagement initiatives and fostering a positive work environment. This involvement helped me build strong interpersonal relationships and strengthen team dynamics across departments.
				</span>
				<span>
					Additionally, working on migrating on-premises applications to the cloud provided me with valuable exposure to Azure. I collaborated with multiple teams to ensure a smooth migration process and gained hands-on experience with new cloud concepts, continuously learning along the way.
				</span>
				<span>
					With the TSA now successfully completed, our cloud migration efforts have resulted in approximately 30% cost savings. Currently, my focus is on further modernizing our systems by migrating databases from SQL Server to PostgreSQL, restructuring long-standing legacy APIs, and upgrading the application stack to Next.js for enhanced performance and maintainability.
				</span>
			</div>

			<Carousel images={images} />
		</div>

	);
}