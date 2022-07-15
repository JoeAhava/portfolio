import React from "react";
import Card from "./Card";

export default function Grid({ items }) {
	return (
		<div
			className=" w-full my-8 grid grid-cols-1 
        md:grid-cols-3 justify-evenly gap-4 lg:gap-8 py-8 px-4 md:px-10 lg:px-16"
		>
			{items.map((item, index) => (
				<Card key={index} item={item} />
			))}
		</div>
	);
}
