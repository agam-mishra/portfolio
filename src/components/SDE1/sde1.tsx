interface CompanyProp {
	company: String
}
export default function SDE1(props: CompanyProp) {
	console.log("inside")
	const company = props.company
	return (
		<div className="sde2-wrapper flex flex-col gap-8">
			<div className="text-center">
				<h1 className="text-3xl">Application Development Engineer 1</h1>
			</div>
			{company === "sde1a" && (
				<div className="flex flex-col gap-2">
					<span className="text-base text-left">
						After speration of NCR Corporation into two seperate companies, I was alligned to NCR Atleos to look after the company's marketing technology.
						Since it was a fresh start and our application being the face of the brand, I was complied to take multiple requests of improvements and deliver them as soon as possible to minimize the impact.

						Later I decided to move to sales technology team, where I thought my expertise best alligned with the team future goals.
					</span>
					<span>
						I quickly adapted to the new and started on reducing the long due tech debt they had.
					</span>
					<span>
						One of the major tasks during my initial days with the team was to upgrade the application from Java 8 to Java 11 and being a major impact it would have significant impact on business.
					</span>
				</div>
			)}
			{company === "sde1v" && (
				<div className="flex flex-col gap-2">
					<span>
						I quickly adapted to the new and started on reducing the long due tech debt they had.
					</span>
				</div>
			)}
		</div>);
}