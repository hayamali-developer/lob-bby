"use client";
import BannarImage from "@/components/BannarImage";
import BlogsHeroSection from "@/components/BlogsHeroSection";
import Card from "@/components/Card";
import ImageCard from "@/components/ImageCard";
import ThreeCards from "@/components/layout/ThreeCards";
import SearchInput from "@/components/SearchInput";
import VisitPlacesFilter from "@/components/VisitPlacesFilter";
import Image from "next/image";
import React, { useRef, useState } from "react";

function MainBlogsPage() {
	const [isOpen, setIsOpen] = useState(false);
	const filterRef = useRef(null);
	const restaurants = [
		{
			id: 1,
			title: "4 places to extend your summer vacation ",
			imageSrc: "/imgs/visit1.png",
			imageAlt: "Event 1",
			link: "/blogs/5/blog-details",
		},
		{
			id: 2,
			title: "Every thing about santorini",
			imageSrc: "/imgs/visit2.png",
			imageAlt: "Event 2",
			link: "/blogs/5/blog-details",
		},
		{
			id: 3,
			title: "See aurora in the sky ",
			imageSrc: "/imgs/visit3.png",
			imageAlt: "Event 3",
			link: "/blogs/5/blog-details",
		},
	];
	const events = [
		{
			id: 1,
			title: "Photographs",
			imageSrc: "/imgs/Photographs.png",
			imageAlt: "Event 1",
			link: "/blogs/5/blog-details",
		},
		{
			id: 2,
			title: "Music party",
			imageSrc: "/imgs/Music party.png",
			imageAlt: "Event 2",
			link: "/blogs/5/blog-details",
		},
		{
			id: 3,
			title: "Adventure day",
			imageSrc: "/imgs/Adventure day.png",
			imageAlt: "Event 3",
			link: "/blogs/5/blog-details",
		},
	];
	return (
		<>
			<BlogsHeroSection />
			<div className='mt-10 mb-5 px-2 md:px-8 pb-6 lg:px-24'>
				<div className='flex justify-between items-center'>
					<h2 className='text-lg md:text-3xl font-bold'>Places to visit</h2>
					<div className='w-full md:w-1/3 mb-3'>
						<div className='relative flex justify-between items-center gap-2'>
							<SearchInput />

							<button
								id='filter-by'
								className='bg-white flex gap-2 items-center justify-between text-black rounded-md px-4 py-2 w-1/2 font-bold flex-1'
								type='button'
								onClick={() => setIsOpen(!isOpen)}
							>
								Filter
								<Image
									width={20}
									height={20}
									src='/imgs/Polygon 6.svg'
									alt='arrow'
									className=''
								/>
							</button>
							<div ref={filterRef}>
								<VisitPlacesFilter isOpen={isOpen} />
							</div>
						</div>
					</div>
				</div>
				<ThreeCards>
					{restaurants.map((restaurant) => (
						<ImageCard
							key={restaurant.id}
							imageSrc={restaurant.imageSrc}
							imageAlt={restaurant.imageAlt}
							raduis={22}
							topTitle={restaurant.title}
						/>
					))}
				</ThreeCards>

				<BannarImage
					imageSrc={
						"/imgs/young-adults-enjoy-city-nightlife-illuminated-skyline-generated-by-ai.png"
					}
					title='Enjoy city nightlife'
					imageAlt={"Enjoy city nightlife"}
					customClassName={"bottom-[50%] translate-y-[50%] left-7 w-full"}
				/>
				<h2 className='text-lg md:text-3xl font-bold mt-14 mb-7 text-center'>
					Events
				</h2>
				<ThreeCards>
					{events.map((event) => (
						<ImageCard
							key={event.id}
							imageSrc={event.imageSrc}
							imageAlt={event.imageAlt}
							raduis={10}
							topTitle={event.title}
							customClassName={"top-[50%] text-center font-semibold"}
							link={event.link}
						/>
					))}
				</ThreeCards>

				<div className='flex justify-between items-center mt-10 gap-10 flex-col md:flex-row'>
					<div className='flex w-full flex-col items-center'>
						<Image
							src='/imgs/Racing day.png'
							alt='Racing Day'
							width={620}
							height={620}
							className='rounded-lg w-full'
							objectFit='cover'
						/>
						<p className='mt-2 text-center font-semibold text-xl'>Racing day</p>
					</div>
					<div className='flex w-full flex-col items-center'>
						<Image
							src='/imgs/Festival of nature.png'
							alt='Festival of Nature'
							width={620}
							height={620}
							className='rounded-lg w-full'
							objectFit='cover'
						/>
						<p className='mt-2 text-center font-semibold text-xl'>
							Festival of nature
						</p>
					</div>
				</div>

				<h2 className='text-lg md:text-3xl font-bold mt-14 mb-7 text-center'>
					Food
				</h2>
				<div className='mx-auto'>
					{/* Large Featured Image */}
					<div className='relative w-full h-[500px] rounded-lg overflow-hidden'>
						<Image
							src='/imgs/How to eat really well in Florence—beyond the tourist spots..png' // Replace with your image path
							alt='Featured Food'
							layout='fill'
							objectFit='cover'
							className='rounded-lg'
						/>
						<p className='text-white text-2xl font-semibold absolute bottom-16 left-8 right-0 p-3'>
							How to eat really well in Florence—beyond the tourist spots.
						</p>
					</div>

					<div className='grid grid-cols-4 gap-4 mt-4'>
						<Card
							src='/imgs/Title 1.png'
							alt='Title 1'
							title='Title'
							className=' h-[300px] md:h-[400px] col-span-4 md:col-span-2'
							titleClassName={"md:justify-start items-start md:pl-10"}
						/>

						<Card
							src='/imgs/Title 2.png'
							alt='Title 2'
							title='Title'
							className=' h-[300px] md:h-[400px] col-span-4 md:col-span-1'
						/>

						<Card
							src='/imgs/Title 3.png'
							alt='Title 3'
							title='Title'
							className=' h-[300px] md:h-[400px] col-span-4 md:col-span-1'
						/>
					</div>

					<h2 className='text-lg md:text-3xl font-bold mt-14 mb-7 text-center'>
						Trips
					</h2>
					<div className='flex flex-col md:grid grid-cols-3 gap-4 mt-4 mb-32 h-[700px]'>
						<Card
							src='/imgs/trips img 1.png'
							alt='Title 1'
							title='Title 1'
							className='h-[415px] md:h-full'
							titleClassName={"top-[37%] text-center"}
						/>
						<div className='flex flex-col gap-4 md:gap-10 h-full'>
							{/* Two Smaller Cards on the Right */}
							<Card
								src='/imgs/trips img 2.png'
								alt='Title 2'
								title='Title 2'
								className='col-span-1 h-[50%]'
								titleClassName={"top-[50%] text-center"}
							/>

							<Card
								src='/imgs/trips img 3.png'
								alt='Title 3'
								title='Title 3'
								className='col-span-1 h-[50%]'
								titleClassName={"top-[50%] text-center"}
							/>
						</div>
						<Card
							src='/imgs/trips img 4.png'
							alt='Title 4'
							title='Title 4'
							className='h-[415px] md:h-full'
							titleClassName={"top-[37%] text-center"}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default MainBlogsPage;
