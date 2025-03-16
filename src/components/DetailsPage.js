"use client";
import React, {useEffect, useState} from "react";
import TapsLayout from "./layout/TapsLayout";
import MainHeading from "./MainHeading";
import Location from "./Location";
import BannarImage from "./BannarImage";
import ThreeCards from "./layout/ThreeCards";
import ImageCard from "./ImageCard";
import OpeningHoursAndWebsite from "./OpeningHoursAndWebsite";
import ReverceSection from "./ReverceSection";
import Map from "./Map";
import FeedbackSection from "./FeedbackSection";


export default function DetailsPage({
										title,
										data = [], // Default empty array to prevent errors
										description = "No description available.",
										reverseAction, // Fixed name
										reverseTitle, // Fixed name
										reverseTime, // Fixed name
										mapLocation,
									}) {
	return (
		<div className='px-2 md:px-8 pb-6 lg:px-16 bg-gray-100'>
			<MainHeading heading={title} />
			<Location />
			<section className='event-details rounded-3xl event-section mb-6'></section>

			<ThreeCards>
				{data.map((image, index) => (
					<ImageCard
						key={index} // Using index if `id` isn't available
						imageSrc={image} // Assuming image object has `url`
						imageAlt="Cover image of the service"  // Fallback for alt
						radius={22}
					/>
				))}
			</ThreeCards>

			<p className='my-6 text-lg md:text-xl lg:text-2xl'>{description}</p>

			<OpeningHoursAndWebsite />

			<ReverceSection
				action={reverseAction} // Fixed name
				title={reverseTitle} // Fixed name
				time={reverseTime} // Fixed name
			/>

			<Map title='Location' mapSrc={mapLocation} />
			<FeedbackSection />
		</div>
	);
}

