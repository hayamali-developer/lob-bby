'use client';

import ImageCard from "@/components/ImageCard";
import TapsLayout from "@/components/layout/TapsLayout";
import ThreeCards from "@/components/layout/ThreeCards";
import SearchWithFilterSection from "@/components/SearchWithFilterSection";
import SectionTitleAndLink from "@/components/SectionTitleAndLink";
import Image from "next/image";

import {useEffect, useState} from "react";
function MainOfferPage() {
	const [offerField, setOfferField] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch("http://127.0.0.1:8000/api/offers");
				const jsonResponse = await res.json();
				setOfferField(jsonResponse.data || []);
			} catch (error) {
				console.error("Error fetching setOfferField:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className='mb-24'>
			<section className='offers h-auto lg:h-[463px] flex flex-col lg:flex-row justify-between pr-2 pl-2 md:pr-6 md:pl-10 mb-5'>
				<h1 className='text-white md:w-[50%] w-full h-full flex justify-center items-center pb-4 text-2xl md:text-3xl lg:text-4xl font-bold pt-4 md:pt-0'>
					Special Offers <br className='hidden lg:block' />
					for Events Packages
				</h1>
				<div className='flex justify-between gap-4 md:w-[50%] w-full py-4'>
					<div className='h-full flex items-end'>
						<Image
							width={270}
							height={270}
							src='/imgs/image 16.png'
							alt='tree'
							className='h-80'
						/>
					</div>
					<Image
						width={300}
						height={220}
						src='/imgs/image 15.png'
						alt='off'
						className=''
					/>
				</div>
			</section>
			<TapsLayout>
				<SectionTitleAndLink title='Events  Packages Offers' />
				<div className='mb-4'>
					<SearchWithFilterSection />
				</div>
				<ThreeCards>
					{offerField.map((service) => (
						<ImageCard
							key={service.id}
							imageSrc={service.card}
							imageAlt={service.imageAlt}
							title={service.name_en}
							price={service.price}
							rating='5'
							discount={service.discount}
						/>
					))}
				</ThreeCards>
			</TapsLayout>
		</div>
	);
}

export default MainOfferPage;
