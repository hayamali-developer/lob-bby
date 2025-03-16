import Image from "next/image";
import React from "react";

function SummerVibes() {
	return (
		<div className='mx-auto mb-6 mt-4 sm:mt-8'>
			<a href='#'>
				<Image
					src='/imgs/summer-vibes.png'
					alt='summer-vibes'
					layout='responsive'
					width={1000}
					height={500}
					quality={100}
					priority
				/>
			</a>
		</div>
	);
}

export default SummerVibes;