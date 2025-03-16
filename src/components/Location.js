import Image from "next/image";
import React from "react";

function Location({
	location = "Cairo, Egypt",
	iconSrc = "/imgs/location.svg",
	iconSize = 30,
}) {
	return (
		<div className='pb-4 flex items-center space-x-2'>
			<Image
				width={30}
				height={30}
				src={iconSrc}
				alt='location'
				style={{ width: `${iconSize}px` }}
			/>
			<span>{location}</span>
		</div>
	);
}

export default Location;
