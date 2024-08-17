"use client"

import Steps from "@/components/Steps/page"
import { useEffect, useState } from "react"
import SDE2 from "@/components/SDE2/sde2"
import SDE1 from "@/components/SDE1/sde1"
import Analyst from "@/components/Analyst/page"
import Internship from "@/components/Internship/page"

export default function Experience() {
	const [show, setShow] = useState("sde2")

	useEffect(() => {
		console.log("show is ", show);

	}, [show])
	return (
		<div className="flex">
			<div className=" w-1/6">
				<Steps setShow={setShow} />
			</div>
			<div className="w-5/6">
				{show === "sde2" && <SDE2 />}
				{(show === "sde1a" || show === "sde1v") && <SDE1 company={show} />}
				{show === "analyst" && <Analyst />}
				{show === "internships" && <Internship />}
			</div>
		</div>
	)
}
