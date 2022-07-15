import React, { useEffect } from "react";
import Image from "next/image";
export default function Card({ item }) {
	useEffect(() => {
		return () => {};
	}, []);
	return (
		<div className="flex flex-col items-center justify-center bg-white rounded gap-4 py-4 min-w-fit md:py-8 lg:py-12 xl:py-16 md:px-6 lg:px-8 xl:px-10 font-sans ">
			<div id="cardIMG" className="relative w-20 h-20">
				{item.imageSrc ? (
					<Image src={item.imageSrc} alt={item.imageAlt} layout="fill" />
				) : (
					<div className="flex justify-center items-center w-full h-full bg-gray-200" />
				)}
			</div>
			<h1 id="cardTitle" className=" text-lg font-bold">
				{item.title}
			</h1>
			<p id="cardDesc" className="text-center text-sm">
				{item.description}
			</p>
		</div>
	);
}
