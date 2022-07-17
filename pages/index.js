import React, { useState } from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Grid from "../components/Grid";
import SectionTitle from "../components/SectionTitle";
import Reviews from "../components/Reviews";

export default function Home() {
	const [services, setServices] = useState([
		{
			title: "Web Dev",
			description:
				"High quality solution with reasonable price. Features entirely based on you request.",
			imageSrc: "/coding.png",
			imageAlt: "Icon for Web Dev",
		},
		{
			title: "Mobile App Dev",
			description:
				"High quality mobile apps to your business needs. Features entirely based on you request.",
			imageSrc: "/mobile_app_dev.png",
			imageAlt: "Icon for Mobile app development",
		},
		{
			title: "DevOps",
			description:
				"If your looking for partner or have a product to be managed. let's grow together!",
			imageSrc: "/devops.png",
			imageAlt: "Icon for DevOps",
		},
	]);

	const [reviews, setReviews] = useState([
		{
			name: "Merhawi F.",
			comment:
				"High quality solution with reasonable price. Features entirely based on you request.",
			imageSrc: "/merhawi.png",
			imageAlt: "Icon for Web Dev",
			value: 0.1,
			position: "CTO",
		},
		{
			name: "Kaleab B.",
			comment:
				"High quality mobile apps to your business needs. Features entirely based on you request.",
			imageAlt: "Icon for Mobile app development",
			value: 4,
			position: "CEO",
		},
		// {
		// 	name: "DevOps",
		// 	comment:
		// 		"If your looking for partner or have a product to be managed. let's grow together!",
		// 	imageSrc: "/devops.png",
		// 	imageAlt: "Icon for DevOps",
		// 	value: 3,
		// },
	]);
	return (
		<>
			<Head>
				<title>Developer Portfolio</title>
				<meta
					name="description"
					content="Portfolio Website for a web and mobile app developer"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="w-full">
				<Hero />
				<SectionTitle title={"Services"} desc="Quality with efficiency" />

				<Grid items={services} />
				<SectionTitle
					title={"Recommendations"}
					desc="What people say about me"
				/>
				<Reviews items={reviews} />
			</main>
		</>
	);
}
