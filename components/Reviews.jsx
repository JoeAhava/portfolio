import React from "react";
import CardReview from "./CardReview";

export default function Reviews({ items }) {
	return (
		<div
			className="max-w-screen-xl mx-auto my-8 grid grid-cols-1 
        md:grid-cols-3 justify-evenly gap-4 lg:gap-8 py-4 px-4 md:px-10 lg:px-16"
		>
			{items.map((item, index) => (
				<CardReview key={index} item={item} />
			))}
		</div>
	);
}
