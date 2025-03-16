import Image from "next/image";

const Card = ({ src, alt, title, className, titleClassName }) => {
	return (
		<div className={`relative w-full rounded-lg overflow-hidden ${className}`}>
			<Image
				src={src}
				alt={alt}
				layout='fill'
				objectFit='cover'
				className='rounded-lg'
			/>
			<div
				className={`absolute flex items-center justify-center w-full top-10 p-3 ${titleClassName}`}
			>
				<p className='text-white font-semibold'>{title}</p>
			</div>
		</div>
	);
};

export default Card;
