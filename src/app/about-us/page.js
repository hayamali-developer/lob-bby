import Image from "next/image";
import React from "react";

function AboutUs() {
	return (
		<div>
			<section className='about-us flex justify-center items-center text-center'>
				<h1 className='text-white pb-4 text-2xl md:text-3xl lg:text-4xl font-bold'>
					About us
				</h1>
			</section>
			<section className='about-us-desc md:w-[68%] px-4 md:px-0 flex flex-col md:flex-row gap-6 mx-auto my-16 justify-between items-start'>
				<Image
					width={500}
					height={500}
					src='/imgs/logo.svg'
					alt='logo'
					className=''
				/>
				<p className='text-lg md:text-[30px] text-justify'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centurie s, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of L etraset sheets containing Lorem Ipsum passagesike
				</p>
			</section>
		</div>
	);
}

export default AboutUs;
