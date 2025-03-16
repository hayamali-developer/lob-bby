import Image from "next/image";
import React from "react";

function BannarImage({ imageSrc, imageAlt, title, customClassName }) {
	return (
		<div className='mx-auto mt-4'>
			<div className='grid grid-cols-1'>
				<div className='mb-3'>
					<div className='relative'>
						<Image
							width={600}
							height={400}
							src={imageSrc || "/imgs/Explore our Events.png"}
							className='rounded-xl w-full h-[280px] object-cover'
							alt={imageAlt}
						/>
						<div
							className={`absolute left-0 right-0 p-2 text-white  rounded-b-xl text-3xl font-bold ${
								customClassName
									? customClassName
									: "bottom-0 h-[40%] bg-black bg-opacity-50"
							}`}
						>
							{title}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BannarImage;
