import React, { useState } from "react";
import Image from "next/image";

function RatingInput({
	label,
	id = "rating",
	maxRating = 5,
	selectedRating = 0,
	onRatingChange,
	className = "",
	size,
	...props
}) {
	const [rating, setRating] = useState(selectedRating);

	const handleRatingClick = (value) => {
		setRating(value);
		if (onRatingChange) {
			onRatingChange(value);
		}
	};

	return (
		<div className={`w-full ${className}`}>
			{label && (
				<label
					className='block py-2 font-medium text-xl pb-5'
					htmlFor={id}
				>
					{label}
				</label>
			)}
			<div
				className='flex space-x-2'
				id={id}
				{...props}
			>
				{[...Array(maxRating)].map((_, i) => {
					const value = i + 1;
					return (
						<Image
							key={i}
							width={size || 25}
							height={size || 25}
							src={value <= rating ? "/imgs/star.svg" : "/imgs/star 15.svg"}
							alt='star'
							className='cursor-pointer'
							onClick={() => handleRatingClick(value)}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default RatingInput;
