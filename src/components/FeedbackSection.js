"use client";
import Image from "next/image";
import React from "react";
import Buttons from "./Buttons";
import RatingInput from "./RatingInput";

function FeedbackSection() {
	return (
		<div className='card sm:p-10 p-5  bg-white rounded-md mt-8 border border-gray-300'>
			<div className='flex justify-between items-center'>
				<h5 className='font-bold text-lg pb-2'>Reviews</h5>
				<button className='text-primary'>Sort by ▼</button>
			</div>

			<div className='flex items-center mb-3 gap-2 '>
				<span className='text-2xl md:text-3xl font-bold'>4.5</span>

				<RatingInput size={40} />
				<span className='ms-2 text-[#daa520]'>120 reviews</span>
			</div>

			<h6 className='font-bold py-2'>Your Rating</h6>
			<RatingInput size={35} />

			<h6 className='font-bold pb-2 mt-6'>Your Comment</h6>
			<div className='mb-3'>
				<textarea
					className='form-control w-full md:w-[62%] min-h-[60px] h-[60px] resize-none rounded-md py-2 px-3 border border-gray-300 focus:ring focus:ring-blue-300 outline-none'
					rows='3'
				></textarea>
			</div>

			<div className='my-3 text-primary flex items-center gap-2'>
				<Image
					width={30}
					height={30}
					src='/imgs/attach-file 1.svg'
					alt='attach'
					className='w-[30px]'
				/>
				Attachment
			</div>

			<Buttons
				text={"Submit"}
				onClick={() => console.log("first")}
			/>
		</div>
	);
}

export default FeedbackSection;
