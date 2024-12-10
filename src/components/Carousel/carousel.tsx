import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface CarouselProps {
	images: string[];
}

export default function Carousel(props: CarouselProps) {
	const images = props.images;
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 4000);
		return () => clearInterval(interval);
	}, [currentIndex]);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
	};

	const getIndex = (index: number) => {
		return (index + images.length) % images.length;
	};

	return (
		<Box className="relative w-full max-w-5xl mx-auto">
			{/* Mobile and Tablet View */}
			<Box className="lg:hidden flex items-center justify-center">
				<Image
					src={images[currentIndex]}
					alt={`Image ${currentIndex}`}
					height={300}
					width={300}
					className="w-50 h-auto object-fit rounded-lg shadow-lg transition-transform duration-800 ease-in-out"
				/>
			</Box>

			{/* Large Screen View: Carousel */}
			<Box className="hidden lg:flex items-center justify-center space-x-4">
				{/* Left */}
				<Image
					src={images[getIndex(currentIndex - 1)]}
					alt="Previous"
					height={300}
					width={300}
					className="lg:w-60 lg:h-96 object-cover opacity-60 rounded-lg transition-transform duration-1000 ease-in-out transform scale-75"
				/>

				{/* Center */}
				<Box className="relative">
					<Image
						src={images[currentIndex]}
						alt="Current"
						height={400}
						width={400}
						className="lg:w-80 lg:h-96 object-cover rounded-lg shadow-lg transition-transform duration-1000 ease-in-out"
					/>
				</Box>

				{/* Right */}
				<Image
					src={images[getIndex(currentIndex + 1)]}
					alt="Next"
					height={300}
					width={300}
					className="lg:w-60 lg:h-96 object-cover opacity-60 rounded-lg transition-transform duration-1000 ease-in-out transform scale-75"
				/>
			</Box>
			{/* Navigation Buttons */}
			{/* <Box className="absolute inset-[-40px] flex items-center justify-between">
				<Button
					size="large"
					// variant="contained"
					color="primary"
					onClick={handlePrev}
					className="text-gray-700"
				>
					<ArrowBackIosIcon />
				</Button>
				<Button
					size="large"
					// variant="contained"
					color="primary"
					onClick={handleNext}
					className="text-gray-700"
				>
					<ArrowForwardIosIcon />
				</Button>
			</Box> */}

			{/* Indicators */}
			{/* <Box className="flex justify-center mt-4 space-x-2">
				{images.map((_, index) => (
					<Box
						key={index}
						className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-gray-600" : "bg-gray-300"}`}
					/>
				))}
			</Box> */}
		</Box>
	);
};