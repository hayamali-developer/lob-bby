"use client";
import Image from "next/image";
import React from "react";
import SelectBox from "./SelectBox";
import Buttons from "./Buttons";

function SearchSection() {
	const countries = [
		{ id: 1, name: "New York" },
		{ id: 2, name: "London" },
		{ id: 3, name: "Paris" },
	];
	return (
		<div className='container mx-auto px-5 mb-5'>
			<div className='flex justify-center'>
				<div className='w-full max-w-[67%] justify-center flex-1'>
					<div className='flex flex-col md:flex-row gap-2 relative justify-center'>
						<SelectBox
							data={countries}
							customClassName='flex-grow flex-1'
							width={"100%"}
						/>
						<SelectBox data={countries} />

						<SelectBox data={countries} />

						<Buttons
							text={"Search"}
							onClick={() => console.log("first")}
							customClassName={"px-8 py-2"}
							isDisabled={true}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchSection;
