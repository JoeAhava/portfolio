import React, { useEffect } from "react";
import Image from "next/image";
import Review from "./Review";
export default function CardReview({ item }) {
	useEffect(() => {
		return () => {};
	}, []);
	return (
		<div className="flex flex-col justify-around  bg-white rounded gap-4 min-w-fit px-4 py-4 lg:py-8 xl:py-12 md:px-6 lg:px-8 xl:px-10 font-sans ">
			<Review value={item.value} />
			<h1 id="cardTitle" className=" text-lg font-bold">
				{item.title || "Nice Work!"}
			</h1>
			<p id="cardDesc" className=" text-sm">
				{item.comment}
			</p>
			<div className="flex space-x-2">
				<div id="cardIMG" className="relative w-16 h-16 rounded-full">
					{
						<Image
							src={item.imageSrc || "/person.png"}
							alt={item.imageAlt}
							layout="fill"
							className=" rounded-full"
						/>
					}
				</div>
				<div className="flex flex-col">
					<h1 id="cardTitle" className=" text-lg font-bold">
						{item.name}
					</h1>
					<p id="cardDesc" className=" text-sm">
						{item.position}
					</p>
				</div>
			</div>
		</div>
	);
}
