import React from "react";

function OpeningHoursAndWebsite({
	openingHours = "12 am to 5 am",
	websiteUrl = "#",
	websiteName = "www.example.com",
	className = "",
}) {
	return (
		<div className={`pt-4 pb-4 flex justify-between ${className}`}>
			<div className='flex flex-col'>
				<h4 className='font-medium text-xl'>Opening Hours</h4>
				<h5>{openingHours}</h5>
			</div>
			<div className='flex flex-col'>
				<h4 className='font-medium text-xl'>Provider Website</h4>
				<a
					href={websiteUrl}
					style={{ color: "#daa520", fontSize: "22px" }}
					target='_blank'
					rel='noopener noreferrer'
				>
					{websiteName}
				</a>
			</div>
		</div>
	);
}

export default OpeningHoursAndWebsite;
