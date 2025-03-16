import Image from "next/image";
import React from "react";
import Dropdown from "./Dropdown";
import RangeInput from "./RangeInput";
import RatingInput from "./RatingInput";
import SelectBox from "./SelectBox";
import SelectBoxWithTitle from "./SelectBoxWithTitle";

function VisitPlacesFilter({ isOpen }) {
	const typeOptions = [
		{ value: "all", label: "All" },
		{ value: "house", label: "House" },
		{ value: "apartment", label: "Apartment" },
		{ value: "villa", label: "Villa" },
	];
	const countries = [
		{ id: 1, name: "New York" },
		{ id: 2, name: "London" },
		{ id: 3, name: "Paris" },
	];
	return (
		<>
			{isOpen && (
				<div
					id='filter-box'
					className='absolute top-12 right-0 bg-white shadow-xl border border-gray-300 rounded-lg p-4 z-50  w-fit'
				>
					<SelectBoxWithTitle
						title={"Category"}
						data={countries}
					/>
					<SelectBoxWithTitle
						title={"City"}
						data={countries}
					/>
					<SelectBoxWithTitle
						title={"Date"}
						data={countries}
					/>
				</div>
			)}
		</>
	);
}

export default VisitPlacesFilter;
