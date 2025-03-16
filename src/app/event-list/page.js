"use client"; // Ensure it's a Client Component

import { useEffect, useState } from "react";
import ImageCard from "@/components/ImageCard";
import TapsLayout from "@/components/layout/TapsLayout";
import ThreeCards from "@/components/layout/ThreeCards";
import SearchWithFilterSection from "@/components/SearchWithFilterSection";
import SectionTitleAndLink from "@/components/SectionTitleAndLink";
import React from "react";

function EventList() {
	const eventsCategories = [
		{
			id: 1,
			title: "Photographers",
			imageSrc: "/imgs/Photographers.png",
			imageAlt: "Photographers",
			link: "/categories/1",
		},
		{
			id: 2,
			title: "Venues",
			imageSrc: "/imgs/Venues.png",
			imageAlt: "Venues",
			link: "/categories/1",
		},
		{
			id: 3,
			title: "Entertainment",
			imageSrc: "/imgs/Entertainment.png",
			imageAlt: "Entertainment",
			link: "/categories/1",
		},
		{
			id: 4,
			title: "Catering",
			imageSrc: "/imgs/Catering.png",
			imageAlt: "Catering",
			link: "/categories/1",
		},
		{
			id: 5,
			title: "Floriesta",
			imageSrc: "/imgs/Floriesta.png",
			imageAlt: "Floriesta",
			link: "/categories/1",
		},
		{
			id: 6,
			title: "Parties And Weddings",
			imageSrc: "/imgs/Parties And Weddings.png",
			imageAlt: "Parties And Weddings",
			link: "/categories/1",
		},
		{
			id: 7,
			imageSrc: "/imgs/image7.png",
			imageAlt: "Catering",
			link: "/categories/1",
		},
		{
			id: 8,
			imageSrc: "/imgs/image 9.png",
			imageAlt: "Floriesta",
			link: "/categories/1",
		},
		{
			id: 9,
			imageSrc: "/imgs/image 10.png",
			imageAlt: "Parties And Weddings",
			link: "/categories/1",
		},
	];

	const [eventsPackages, setEventsPackages] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch("http://127.0.0.1:8000/api/events");
				const jsonResponse = await res.json();
				setEventsPackages(jsonResponse.data || []);
			} catch (error) {
				console.error("Error fetching EventsPackages:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<div className={`event-list mt-4 h-[460px] `}></div>
			<div className='sm:px-8 mt-8'>
				<TapsLayout>
					<SearchWithFilterSection />

					<SectionTitleAndLink
						title='Events categories'
						link='https://google.com'
					/>
					<ThreeCards>
						{eventsPackages.map((weddingVenue) => (
							<ImageCard
								key={weddingVenue.id}
								imageSrc={weddingVenue.card}
								imageAlt={weddingVenue.name_en}
								title={weddingVenue.name_en || "Unnamed Event"} // Fallback title if missing
								isCentered={true}
								rating="5"
								link={`/event-list/${weddingVenue.id}`}
							/>
						))}
					</ThreeCards>
				</TapsLayout>
			</div>
		</div>
	);
}

export default EventList;
