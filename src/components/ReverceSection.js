"use client";
import React from "react";
import Buttons from "./Buttons";

function ReverceSection({ title, time, action }) {
	return (
		<div className='reservation-card flex justify-between items-start md:items-center mb-3'>
			<div className='reservation-card-content'>
				<h3 className='mb-3 text-[26px]'> {title}</h3>
				<div className='flex gap-5 flex-col md:flex-row'>
					<p className='mb-3 text-[20px] pr-[28px]'>{time}</p>
					<Buttons
						text={"Reserve"}
						onClick={() => action()}
					/>
				</div>
			</div>
			<div className='reservation-card-content text-center'>
				<h5 className='mb-1 text-[26px]'>Price Range</h5>
				<p>$$$</p>
			</div>
		</div>
	);
}

export default ReverceSection;
