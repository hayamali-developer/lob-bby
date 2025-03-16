import React from "react";

function Dropdown({ label, id, options, className = "", ...props }) {
	return (
		<div className={`w-1/2 ${className}`}>
			<label
				className='block pb-1 font-bold'
				htmlFor={id}
			>
				{label}
			</label>
			<div className='relative'>
				<select
					id={id}
					className='appearance-none bg-gray-200 h-12 w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-300 pl-3 pr-10 outline-none'
					{...props}
				>
					{options.map((option) => (
						<option
							key={option.value}
							value={option.value}
						>
							{option.label}
						</option>
					))}
				</select>

				{/* <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
					<svg
						className='w-4 h-4 text-gray-500'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path
							fillRule='evenodd'
							d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
							clipRule='evenodd'
						/>
					</svg>
				</div> */}
			</div>
		</div>
	);
}

export default Dropdown;
