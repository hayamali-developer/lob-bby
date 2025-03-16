import Image from "next/image";
import React from "react";

function FourCards({ images }) {
	return (
		<div className='container mx-auto my-4'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
				{images.map((image, index) => (
					<div
						key={index}
						className='bg-white shadow-lg rounded-lg overflow-hidden'
					>
						<Image
							src={image.imageSrc}
							alt={`Card ${index + 1}`}
							className='w-full h-48 object-cover'
							width={300}
							height={300}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default FourCards;
