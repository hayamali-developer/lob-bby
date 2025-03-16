import Link from "next/link";
import React from "react";

function SectionTitleAndLink({ title, link }) {
	return (
		<div className='flex justify-between mb-4 items-center w-full mt-4'>
			<h3 className=' text-2xl font-bold py-2 '>{title}</h3>
			{link && (
				<Link
					href={link}
					className=''
				>
					view all
				</Link>
			)}
		</div>
	);
}

export default SectionTitleAndLink;
