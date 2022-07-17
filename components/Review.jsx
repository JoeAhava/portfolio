import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
const Star = ({ value }) => {
	return value ? <BsStarFill /> : <BsStar />;
};

const SList = ({ value }) => {
	const r = value % 5;
	return (
		<>
			<Star value={r >= 0} />
			<Star value={r >= 2 || r == 0} />
			<Star value={r >= 3 || r == 0} />
			<Star value={r >= 4 || r == 0} />
			<Star value={r == 0} />
		</>
	);
};
export default function Review({ value }) {
	return (
		<div className="flex text-orange-300">
			{value ? (
				<SList value={value} />
			) : (
				<>
					<Star value={0} />
					<Star value={0} />
					<Star value={0} />
					<Star value={0} />
					<Star value={0} />
				</>
			)}
		</div>
	);
}
