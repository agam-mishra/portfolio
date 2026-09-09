"use client";

import { useState } from "react";
import Steps from "@/components/Steps/page";
import RoleDetail from "@/components/RoleDetail/roleDetail";
import MobileTab from "@/components/MobileTab/mobileTab";
import Reveal from "@/components/Reveal/reveal";

export default function Experience() {
	const [show, setShow] = useState("visionsure");

	return (
		<div className="flex gap-1 flex-col lg:flex-row">
			{/** Stepper tab starts */}
			<div
				id="left-content"
				className="w-1/4 bg-[var(--bg-raised)] border-r border-[var(--border)] py-4 px-1 sticky top-0 hidden lg:block"
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
				className="lg:w-3/4 py-4 px-12 bg-[var(--bg)] rounded overflow-y-auto scrollbar-hide"
			>
				<Reveal key={show}>
					<RoleDetail id={show} />
				</Reveal>
			</div>
		</div>
	);
}
