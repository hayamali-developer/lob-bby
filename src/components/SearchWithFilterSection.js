"use client";
import React, { useState, useRef, useEffect } from "react";
import Buttons from "./Buttons";
import SearchInput from "./SearchInput";
import FilterBy from "./FilterBy";

function SearchWithFilterSection() {
	const [isOpen, setIsOpen] = useState(false);
	const filterRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (filterRef.current && !filterRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	return (
		<div className=' mx-auto mt-4'>
			<div className='flex flex-wrap gap-2'>
				<div className='flex-1 mb-3'>
					<SearchInput />
				</div>

				<div className='w-full md:w-1/3 mb-3 pl-2'>
					<div className='relative flex justify-between items-center gap-2'>
						<Buttons
							text={"Search"}
							onClick={() => console.log("first")}
							customClassName={"px-5 py-2 flex-1"}
						/>
						<button
							id='filter-by'
							className='bg-white text-black rounded-md px-4 py-2 w-1/2 font-bold flex-1'
							type='button'
							onClick={() => setIsOpen(!isOpen)}
						>
							Filter By
						</button>
						<div ref={filterRef}>
							<FilterBy isOpen={isOpen} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchWithFilterSection;
