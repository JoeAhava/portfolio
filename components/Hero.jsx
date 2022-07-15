import React from "react";
import Image from "next/image";
import { BsArrowRight, BsTriangle } from "react-icons/bs";
import { BiPolygon, BiRectangle, BiCircle } from "react-icons/bi";
export default function Hero() {
	return (
		<section className=" bg-white mb-16 mx-2 md:mx-4 lg:mx-12 flex md:flex-row lg:pl-4 xl:pl-18 pt-0 justify-between relative">
			<div className=" self-stretch max-w-lg pl-3 md:px-8 lg:pl-24 py-16 lg:py-28 xl:py-40 flex-grow">
				<h1 className=" font-sans font-bold text-4xl mb-8">
					I’m <br />
					<span className=" text-4xl text-orange-300">Yohannes Terfa</span>
					<br />
					Full-stack Developer
				</h1>
				<blockquote className=" border-l-4  border-orange-300 pl-8">
					A passionate software developer pursuing excellency
				</blockquote>
				<p className=" my-4">
					Graduated with a Software Engineering Possessing a sound background in
					web development with a highly-motivated, productive and
					customer-focused team player with strong communication, interpersonal,
					organizational, time management, analytical and solution oriented
					skills
				</p>
				<button
					onClick={() => {}}
					className=" bg-orange-300 font-bold uppercase py-2 px-7 rounded-md flex justify-evenly items-center"
				>
					Hire me{" "}
					<BsArrowRight size={"1.5em"} className=" font-extrabold ml-2" />
				</button>
			</div>
			<div className=" w-72 xl:w-96 my-8 hidden md:flex relative">
				<Image
					src="/joe_photo.jpg"
					alt="Photo of Yohannes Terfa"
					layout="fill"
					className=" object-cover"
				/>
			</div>
			<BiPolygon className=" m-16 xl:m-24 text-orange-300 absolute top-8 right-8" />
			<BiPolygon className=" m-16 xl:m-24 text-green-300 absolute bottom-8 left-16" />
			<BiCircle
				className=" m-16 xl:m-24 text-blue-500 absolute bottom-1/2
             left-8"
			/>
			<BiRectangle className=" m-16 xl:m-24 text-blue-500 absolute top-1/2 right-8" />
			<BsTriangle className=" m-16 xl:m-24 text-amber-800 absolute bottom-8 left-1/3" />
		</section>
	);
}
