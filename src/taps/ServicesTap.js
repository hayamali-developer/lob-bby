
import BannarImage from "@/components/BannarImage";
import ImageCard from "@/components/ImageCard";
import SectionTitleAndLink from "@/components/SectionTitleAndLink";
import SummerVibes from "@/components/SummerVibes";
import TrendingDestinationsCities from "@/components/TrendingDestinationsCities";
import FourCards from "@/components/layout/FourCards";
import TapsLayout from "@/components/layout/TapsLayout";
import ThreeCards from "@/components/layout/ThreeCards";
import React from "react";

function ServicesTap() {
	const services = [
		{
			id: 1,
			title: "3 days Greece wedding for 50 guests",
			price: "15000",
			rating: "4.5",
			imageSrc: "/imgs/image.png",
			imageAlt: "Event 1",
		},
		{
			id: 2,
			title: "3 days Dubai robotic trip for 7 team member",
			price: "21000",
			rating: "4.2",
			imageSrc: "/imgs/image (1).png",
			imageAlt: "Event 2",
		},
		{
			id: 3,
			title: "Honymoon in Greece",
			price: "21000",
			rating: "4.1",
			imageSrc: "/imgs/image (2).png",
			imageAlt: "Event 3",
		},
	];
	const restaurants = [
		{
			id: 1,
			title: "Venues",
			imageSrc: "/imgs/Resturant 1.png",
			imageAlt: "Event 1",
		},
		{
			id: 2,
			title: "Title",
			imageSrc: "/imgs/Resturant 2.png",
			imageAlt: "Event 2",
		},
		{
			id: 3,
			title: "Title",
			imageSrc: "/imgs/Resturant 3.png",
			imageAlt: "Event 3",
		},
	];
	const weddingVenues = [
		{
			id: 1,
			title: "wedding Venues",
			imageSrc: "/imgs/Upcoming Events.png",
			imageAlt: "Event 1",
			rating: "4.5",
			link: "/event-list/1",
		},
		{
			id: 2,
			title: "wedding Venues",
			imageSrc: "/imgs/Upcoming Events2.png",
			imageAlt: "Event 2",
			rating: "4.2",
			link: "/event-list/1",
		},
		{
			id: 3,
			title: "wedding Venues",
			imageSrc: "/imgs/Upcoming Events3.png",
			imageAlt: "Event 3",
			rating: "4.1",
			link: "/event-list/1",
		},
	];

	const famousPlacesImages = [
		{
			id: 1,
			imageSrc: "/imgs/pyramids.png",
		},
		{
			id: 2,
			imageSrc: "/imgs/Famous Places  2.png",
		},
		{
			id: 3,
			imageSrc: "/imgs/Famous Places 3.png",
		},
		{
			id: 4,
			imageSrc: "/imgs/Famous Places4.png",
		},
	];
	return (
		<TapsLayout>
			<SectionTitleAndLink
				title='Events packages'
				link='https://google.com'
			/>
			<ThreeCards>
				{services.map((service) => (
					<ImageCard
						key={service.id}
						imageSrc={service.imageSrc}
						imageAlt={service.imageAlt}
						title={service.title}
						price={service.price}
						rating={service.rating}
					/>
				))}
			</ThreeCards>

			<BannarImage
				imageSrc={"/imgs/Explore our Events.png"}
				title='Explore our Events'
				imageAlt={"Explore our Events"}
			/>

			<SectionTitleAndLink
				title='Resturants'
				link='https://google.com'
			/>
			<ThreeCards>
				{restaurants.map((restaurant) => (
					<ImageCard
						key={restaurant.id}
						imageSrc={restaurant.imageSrc}
						imageAlt={restaurant.imageAlt}
						title={restaurant.title}
					/>
				))}
			</ThreeCards>

			<SectionTitleAndLink
				title='Events packages Offers'
				link='/event-list'
			/>
			<ThreeCards>
				{services.map((service) => (
					<ImageCard
						key={service.id}
						imageSrc={service.imageSrc}
						imageAlt={service.imageAlt}
						title={service.title}
						price={service.price}
						rating={service.rating}
					/>
				))}
			</ThreeCards>

			<TrendingDestinationsCities />

			<SectionTitleAndLink
				title='Upcoming Events'
				link='/event-list'
			/>
			<ThreeCards>
				{weddingVenues.map((weddingVenue) => (
					<ImageCard
						key={weddingVenue.id}
						imageSrc={weddingVenue.imageSrc}
						imageAlt={weddingVenue.imageAlt}
						title={weddingVenue.title}
						isCentered={true}
						// rating={weddingVenue.rating}
						link={weddingVenue.link}
					/>
				))}
			</ThreeCards>

			<SectionTitleAndLink
				title='Famous Places'
				link='/event-list'
			/>
			<FourCards images={famousPlacesImages} />

			<SummerVibes />
		</TapsLayout>
	);
}

export default ServicesTap;