import Image from "next/image";
import React from "react";

function SearchInput() {
	return (
		<div className='relative flex flex-col md:flex-row gap-2'>
			<input
				type='text'
				className='form-input w-full rounded-md py-2 px-12 border border-gray-300 focus:ring focus:ring-blue-300 outline-none'
				placeholder='Search'
			/>
			<Image
				width={20}
				height={20}
				src='/imgs/search.svg'
				alt='search'
				className='absolute left-4 top-1/2 transform -translate-y-1/2'
			/>
		</div>
	);
}

export default SearchInput;
