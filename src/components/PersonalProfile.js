import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

function PersonalProfile() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const menuRef = useRef(null);

	const menuItems = [
		{ src: "/imgs/profile.svg", alt: "profile", text: "My profile" },
		{ src: "/imgs/favourite-heart 1.svg", alt: "profile", text: "Favourite" },
		{ src: "/imgs/listing.svg", alt: "profile", text: "My listing" },
		{ src: "/imgs/settings 1.svg", alt: "profile", text: "Settings" },
		{ src: "/imgs/log-out 1.svg", alt: "profile", text: "log out" },
	];

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsPopupOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});
	return (
		<div className='flex gap-4'>
			<Image
				height={20}
				width={20}
				src='/imgs/notification.svg'
				alt='notification'
				className='w-[20px] cursor-pointer'
			/>
			<div className='flex gap-2 items-center relative cursor-pointer'>
				<Image
					height={60}
					width={60}
					src='/imgs/profile pic.svg'
					alt='user'
					className='w-[60px]'
					onClick={() => setIsPopupOpen(!isPopupOpen)}
				/>
				<p
					onClick={() => setIsPopupOpen(!isPopupOpen)}
					className=' text-nowrap m-0 hidden sm:block'
				>
					Ahmed hussein
				</p>
				{isPopupOpen && (
					<ul
						id='profile-info-ul'
						className='absolute flex flex-col gap-2 shadow-lg'
						ref={menuRef}
					>
						{menuItems.map((item, index) => (
							<li
								key={index}
								className='flex justify-content-center items-center gap-2 py-2 pb-3 pl-6'
								style={
									index < menuItems.length - 1
										? { borderBottom: "1px solid #ddd", paddingBottom: "8px" }
										: { paddingBottom: "8px" }
								}
							>
								<Image
									height={25}
									width={25}
									src={item.src}
									alt={item.alt}
									className='w-[25px]'
								/>
								<span>{item.text}</span>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

export default PersonalProfile;
