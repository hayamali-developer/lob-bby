"use client";
import React, { useState } from "react";
import SearchSection from "@/components/SearchSection";
import Taps from "@/components/Taps";
import ServicesTap from "@/taps/ServicesTap";
import HotelsTap from "@/taps/HotelsTap";
import RestaurantsTap from "@/taps/RestaurantsTap";
import FamousPlacesTap from "@/taps/FamousPlacesTap";

function MainHomePage() {
	const taps = [
		{
			id: 1,
			name: "Services",
			value: "services",
			component: <ServicesTap />,
		},
		{
			id: 2,
			name: "Hotels",
			value: "hotels",
			component: <HotelsTap />,
		},
		{
			id: 3,
			name: "Restaurants",
			value: "restaurants",
			component: <RestaurantsTap />,
		},
		{
			id: 4,
			name: "Famous Places",
			value: "famous-places",
			component: <FamousPlacesTap />,
		},
		{
			id: 5,
			name: "Events Packages",
			value: "events-packages",
			component: <FamousPlacesTap />,
		},
	];
	const [selectedTap, setSelectedTap] = useState(1);
	return (
		<div className='px-2 md:px-10'>
			<Taps
				allTaps={taps}
				selectedTap={selectedTap}
				setSelectedTap={setSelectedTap}
			/>
			<SearchSection />
			{taps.find((tap) => tap.id === selectedTap).component}
		</div>
	);
}

export default MainHomePage;
