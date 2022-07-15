import React from "react";

export default function SectionTitle({ title, desc }) {
	return (
		<div className="font-sans mx-auto text-center">
			<h1 className="font-bold text-2xl my-2">{title}</h1>
			<p className=" font-light italic"> {desc} </p>
		</div>
	);
}
