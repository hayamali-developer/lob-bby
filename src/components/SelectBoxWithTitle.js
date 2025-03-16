import Image from "next/image";
import React from "react";

function SelectBoxWithTitle({ data, width, customClassName, title }) {
	return (
		<div
			className={`relative min-h-[40px]: min-w-[150px] w-[${width}] ${customClassName}`}
		>
			<h3 className='font-bold pb-1'>{title}</h3>
			<select className='form-select appearance-none mb-2 rounded-lg flex-grow w-full h-full border px-1 min-h-[40px] bg-[#eee]'>
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
				className='absolute w-[20px] transform -translate-y-[50%] top-[60%] right-[8px]'
			/>
		</div>
	);
}

export default SelectBoxWithTitle;
