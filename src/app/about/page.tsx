"use client";

import Services from "@/components/Services/page";
import Steps from "@/components/Steps/page";
import MobileTab from "@/components/MobileTab/mobileTab";
import Technology from "@/components/Technology/technology";
import { useState } from "react";

export default function About() {
	const [show, setShow] = useState("technology");

	return (
		<div className="about flex">
			<div className="flex bg-experience overflow-hidden gap-1 flex-col lg:flex-row">
				{/** Stepper tab starts */}
				<div
					id="left-content"
					className="w-1/4 bg-gradient-to-r from-neutral-200 to-neutral-100 py-4 px-1 sticky top-0 hidden lg:block"
				>
					<Steps setShow={setShow} show={"about"} />
				</div>
				{/** Stepper tab ends */}

				{/** Mobile tab starts */}
				<div
					id="left-content"
					className="p-1 sticky top-0 lg:hidden w-full flex justify-center"
				>
					<MobileTab setShow={setShow} show={"about"} />
				</div>
				{/** Mobile tab ends */}

				<div
					id="right-content"
					className="lg:w-3/4 py-4 px-4 lg:px-12 bg-gradient-to-r from-neutral-100 to-neutral-200 overflow-y-auto scrollbar-hide"
				>
					{show === "services" && <Services />}
					{show === "technology" && <Technology />}
					{/* {show === "certifications" && <Certifications />} */}
				</div>
			</div>
		</div>
	)
}
