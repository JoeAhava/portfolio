import React from "react";
import Card from "./Card";

export default function Grid({ items }) {
	return (
		<div
			className=" max-w-screen-xl mx-auto my-8 grid grid-cols-1 
        md:grid-cols-3 justify-evenly gap-6 lg:gap-12 py-8 px-4 md:px-10 lg:px-16"
		>
			{items.map((item, index) => (
				<Card key={index} item={item} />
			))}
		</div>
	);
}
