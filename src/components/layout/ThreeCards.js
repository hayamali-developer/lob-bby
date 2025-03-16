import React from "react";

function ThreeCards({ children }) {
	return (
		<div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4 w-full'>
			{children}
		</div>
	);
}

export default ThreeCards;
