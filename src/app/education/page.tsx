"use client";

import Analyst from "@/components/Analyst/page";
import EducationDetails from "@/components/Education/page";
import SDE1 from "@/components/SDE1/sde1";
import SDE2 from "@/components/SDE2/sde2";
import Steps from "@/components/Steps/page";
import { useState } from "react";

export default function Education() {
	const [show, setShow] = useState("btech");

	return (
		<div className="education flex">
			<div className="flex bg-experience h-screen overflow-hidden">
				<div
					id="left-content"
					className="w-1/4 bg-gradient-to-r from-sky-500 to-indigo-500 py-4 px-1 sticky top-0 h-screen"
				>
					<Steps setShow={setShow} show={"education"} />
				</div>
				<div
					id="right-content"
					className="w-3/4 px-32 bg-gradient-to-r from-cyan-500 to-blue-500 py-4 overflow-y-auto h-screen scrollbar-hide"
				>
					{show === "btech" && <EducationDetails />}
					{show === "hsc" && <EducationDetails />}
					{show === "sc" && <EducationDetails />}
				</div>
			</div>
		</div>
	)
}
