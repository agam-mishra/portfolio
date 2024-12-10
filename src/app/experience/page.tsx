"use client";

import { useEffect, useState } from "react";
import Steps from "@/components/Steps/page";
import SDE2 from "@/components/SDE2/sde2";
import SDE1 from "@/components/SDE1/sde1";
import Analyst from "@/components/Analyst/page";
import Internship from "@/components/Internship/page";
import MobileTab from "@/components/MobileTab/mobileTab";

export default function Experience() {
	const [show, setShow] = useState("sde2");

	return (
		<div className="flex gap-1 flex-col lg:flex-row">
			{/** Stepper tab starts */}
			<div
				id="left-content"
				className="w-1/4 bg-gradient-to-r from-neutral-200 to-neutral-100 py-4 px-1 sticky top-0 hidden lg:block"
			>
				<Steps setShow={setShow} show={"experience"} />
			</div>
			{/** Stepper tab ends */}

			{/** Mobile tab starts */}
			<div
				id="left-content"
				className="p-1 sticky top-0 lg:hidden w-full flex justify-center"
			>
				<MobileTab setShow={setShow} show={"experience"} />
			</div>
			{/** Mobile tab ends */}

			<div
				id="right-content"
				className="lg:w-3/4 py-4 px-12 bg-gradient-to-r from-slate-50 to-slate-200 rounded overflow-y-auto scrollbar-hide"
			>
				{show === "sde2" && <SDE2 />}
				{(show === "sde1a" || show === "sde1v") && <SDE1 company={show} />}
				{show === "analyst" && <Analyst />}
				{show === "internships" && <Internship />}
			</div>
		</div>
	);
}
