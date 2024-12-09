"use client";

import Services from "@/components/Services/page";
import Steps from "@/components/Steps/page";
import Technology from "@/components/Technology/technology";
import { useState } from "react";

export default function About() {
	const [show, setShow] = useState("technology");

	return (
		<div className="about flex">
			<div className="flex bg-experience overflow-hidden gap-1">
				<div
					id="left-content"
					className="w-1/4 bg-gradient-to-r from-neutral-200 to-neutral-100 py-4 px-1 sticky top-0"
				>
					<Steps setShow={setShow} show={"about"} />
				</div>
				<div
					id="right-content"
					className="w-3/4 py-4 px-12 bg-gradient-to-r from-neutral-100 to-neutral-200 overflow-y-auto scrollbar-hide"
				>
					{show === "services" && <Services />}
					{show === "technology" && <Technology />}
					{/* {show === "certifications" && <Certifications />} */}
				</div>
			</div>
		</div>
	)
}
