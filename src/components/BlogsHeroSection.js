"use client";
import React from "react";
import Buttons from "./Buttons";

function BlogsHeroSection() {
	return (
		<section
			className='blogs-section flex items-center text-center'
			style={{ backgroundImage: "url('/imgs/blog banner.png')" }}
		>
			<div className='overlay container mx-auto'>
				<div>
					<h1 className='text-white pb-4 text-2xl md:text-3xl lg:text-4xl'>
						A super-practical nuts-and-bolts guide to traveling alone
					</h1>
					<p className='text-white pb-4 text-lg md:text-xl lg:text-2xl'>
						Lorem Ipsum has been the industrys \ning Lorem Ipsum passagesike
					</p>
					<a
						href='#'
						// className='btn btn-warning btn-lg mt-3 text-white px-5 p'
					>
						<Buttons
							text='Explore'
							onClick={() => {}}
							customClassName={"px-10 py-2"}
						/>
					</a>
				</div>
			</div>
		</section>
	);
}

export default BlogsHeroSection;
