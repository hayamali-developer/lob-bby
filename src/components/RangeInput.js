import React, { useState } from "react";

function RangeInput({
	label = "Price range",
	id = "price-range",
	min = 0,
	max = 200000,
	step = 1000,
	defaultValue = 0,
	unit = "EGP",
	onValueChange,
	className = "",
	...props
}) {
	const [currentValue, setCurrentValue] = useState(defaultValue);

	const handleInputChange = (event) => {
		const value = Number(event.target.value); // Ensure value is a number
		setCurrentValue(value);
		if (onValueChange) {
			onValueChange(value);
		}
	};

	return (
		<div className={`form-group w-[70%] ${className}`}>
			<label
				htmlFor={id}
				className='p-2 font-medium block'
			>
				{label}
			</label>

			<div className='flex justify-between pb-2'>
				<span>
					{min} {unit}
				</span>
				<span id='price-value'>
					{currentValue} {unit}
				</span>
			</div>

			<input
				type='range'
				className='form-control-range w-full'
				id={id}
				min={min}
				max={max}
				step={step}
				value={currentValue}
				onChange={handleInputChange}
				{...props}
			/>
		</div>
	);
}

export default RangeInput;
