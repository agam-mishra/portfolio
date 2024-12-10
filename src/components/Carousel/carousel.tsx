import React, { useState, useEffect } from "react";
import { Button, Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

// Type definition for the Carousel component props
interface CarouselProps {
	images: string[]; // Array of image URLs
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	// Auto-scroll functionality
	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 3000); // Change image every 3 seconds
		return () => clearInterval(interval); // Cleanup on component unmount
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
		<div className="rounded p-4">

			<Box className="relative w-full max-w-5xl mx-auto">
				{/* Carousel Container */}
				<Box className="flex items-center justify-center space-x-4">
					{/* Left Preview */}
					<Image
						src={images[getIndex(currentIndex - 1)]}
						alt="Previous"
						height={100}
						width={100}
						className="w-32 h-32 sm:w-48 sm:h-48 object-cover opacity-60 rounded-lg transition-transform duration-300 transform scale-75"
					/>

					{/* Center Image */}
					<Box className="relative">
						<Image
							src={images[currentIndex]}
							alt="Current"
							height={100}
							width={100}
							className="w-64 h-64 sm:w-96 sm:h-96 object-cover rounded-lg shadow-lg"
						/>
					</Box>

					{/* Right Preview */}
					<Image
						src={images[getIndex(currentIndex + 1)]}
						alt="Next"
						height={100}
						width={100}
						className="w-32 h-32 sm:w-48 sm:h-48 object-cover opacity-60 rounded-lg transition-transform duration-300 transform scale-75"
					/>
				</Box>

				{/* Navigation Buttons */}
				{/* <Box className="absolute inset-0 flex items-center justify-between px-4">
				<Button
					variant="contained"
					color="primary"
					onClick={handlePrev}
					className="!bg-gray-800 !opacity-70 hover:!opacity-90"
				>
					<ArrowBackIosIcon />
				</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={handleNext}
					className="!bg-gray-800 !opacity-70 hover:!opacity-90"
				>
					<ArrowForwardIosIcon />
				</Button>
			</Box> */}

				{/* Indicators */}
				{/* <Box className="flex justify-center mt-4 space-x-2">
				{images.map((_, index) => (
					<Box
						key={index}
						className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-600" : "bg-gray-300"}`}
					/>
				))}
			</Box> */}
			</Box>
		</div>
	);
};

export default Carousel;
