import Image from "next/image";
import React from "react";
import Dropdown from "./Dropdown";
import RangeInput from "./RangeInput";
import RatingInput from "./RatingInput";

function FilterBy({ isOpen }) {
	const typeOptions = [
		{ value: "all", label: "All" },
		{ value: "house", label: "House" },
		{ value: "apartment", label: "Apartment" },
		{ value: "villa", label: "Villa" },
	];
	return (
		<>
			{isOpen && (
				<div
					id='filter-box'
					className='absolute top-12 right-0 bg-white shadow-xl border border-gray-300 rounded-lg p-4 z-50  w-full'
				>
					<div className='flex gap-14'>
						<Dropdown
							label='Type'
							id='type'
							options={typeOptions}
						/>
						<Dropdown
							label='City'
							id='type'
							options={typeOptions}
						/>
					</div>
					<RangeInput />

					<RatingInput label={"Rating"} />
				</div>
			)}
		</>
	);
}

export default FilterBy;
