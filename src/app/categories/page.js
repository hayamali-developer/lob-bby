"use client"; // Ensure it's a Client Component

import { useEffect, useState } from "react";
import ImageCard from "@/components/ImageCard";
import TapsLayout from "@/components/layout/TapsLayout";
import ThreeCards from "@/components/layout/ThreeCards";
import SectionTitleAndLink from "@/components/SectionTitleAndLink";

export default function Categories() {
	const [eventsCategories, setEventsCategories] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch("http://127.0.0.1:8000/api/services");
				const jsonResponse = await res.json();
				setEventsCategories(jsonResponse.data || []);
			} catch (error) {
				console.error("Error fetching categories:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<div
				className={`categories mt-4 h-[460px] `}
				style={{
					backgroundImage:
						"url('/imgs/playful-games-birthday-party-nature-background 1.png')",
				}}
			></div>
			<div className='sm:px-8 mt-8'>
				<TapsLayout>
					<SectionTitleAndLink
						title='Events categories'
						link='https://google.com'
					/>
					<ThreeCards>
						{eventsCategories.map((event) => (
							<ImageCard
								key={event.id}
								imageSrc={event.card}
							   imageAlt={event.name_en}
								title={event.name_en}
							     isCentered={true}
								link={`/categories/${event.id}`}
							/>
						))}
					</ThreeCards>
				</TapsLayout>
			</div>
		</div>
	);
}