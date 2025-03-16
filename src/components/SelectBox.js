import Image from "next/image";
import React from "react";

function SelectBox({ data, width, customClassName }) {
	return (
		<div
			className={`relative min-h-[40px]: min-w-[150px] w-[${width}] ${customClassName}`}
		>
			<select className='form-select appearance-none mb-2 rounded-lg flex-grow w-full h-full border px-1 min-h-[40px]'>
				{data.map((item) => (
					<option
						value={item.id}
						key={item.id}
					>
						{item.name}
					</option>
				))}
			</select>
			<Image
				width={20}
				height={20}
				src='/imgs/Polygon 6.svg'
				alt='arrow'
				className='absolute w-[20px] transform -translate-y-[50%] top-[50%] right-[8px]'
			/>
		</div>
	);
}

export default SelectBox;
