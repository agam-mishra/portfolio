"use client";
import { useState } from "react";
import Link from "next/link";
import { Dialog } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
	const [openModal, setOpenModal] = useState(false);

	const handleModalToggle = () => {
		setOpenModal(!openModal);
	};

	return (
		<div className="header my-2 md:m-4 lg:my-8 flex items-center text-xl justify-between">

			<Link href={"/"} className="text-lg italic font-semibold text-red-500">
				&lt;agamMishra /&gt;
			</Link>

			<div className="navigation-wrap hidden lg:flex">
				<nav className="flex gap-10">
					<Link href={"/about"}>About</Link>
					<Link href={"/experience"}>Experience</Link>
					<Link href={"/projects"}>Projects</Link>
					<Link href={"/contact"}>Contact</Link>
				</nav>
			</div>

			<div className="lg:hidden flex items-center">
				<button onClick={handleModalToggle} className="text-2xl">
					<MenuIcon />
				</button>
			</div>

			<Dialog
				open={openModal}
				onClose={handleModalToggle}
				PaperProps={{
					style: {
						width: "auto",
						maxWidth: "90%",
						position: "absolute",
						top: "0",
						right: "0",
						//height: "100%", 
						borderRadius: "8px 0 0 8px",
						background: "rgba(0, 0, 0, 0.7)",
					},
				}}
				transitionDuration={500}
			>
				<div className="flex flex-col items-center justify-center p-4 bg-slate-300 text-gray-900 w-full">
					<div className="w-full text-right mb-2">
						<button onClick={handleModalToggle} className="text-black text-md">
							<CancelIcon />
						</button>
					</div>
					<nav className="flex flex-col gap-4 text-xl">
						<Link href={"/about"} onClick={handleModalToggle}>About</Link>
						<Link href={"/experience"} onClick={handleModalToggle}>Experience</Link>
						<Link href={"/projects"} onClick={handleModalToggle}>Projects</Link>
						<Link href={"/contact"} onClick={handleModalToggle}>Contact</Link>
					</nav>
				</div>
			</Dialog>
		</div>
	);
}
