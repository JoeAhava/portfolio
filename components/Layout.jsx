import React from "react";

export default function Layout({ children }) {
	return (
		<article className="w-full bg-gray-100 place-content-center">
			{children}
		</article>
	);
}
