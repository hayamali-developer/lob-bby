import Image from "next/image";
import React from "react";
import PersonalProfile from "./PersonalProfile";

const Popup = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 flex p-4 sm:p-10 bg-white z-[9999]  flex-col'>
			<div className=''>
				<div className='small-lang'>
					<PersonalProfile />
					<div className='flex gap-2 justify-center pr-10 '>
						<Image
							width={40}
							height={40}
							src='/imgs/exchange 1.svg'
							alt='exchange'
							className='w-[40px]'
						/>
						<div className='d-flex gap-1 align-items-center'>
							EGP
							<Image
								width={20}
								height={20}
								src='/imgs/Polygon 6.svg'
								alt='arrow'
							/>
						</div>
					</div>

					<div className='language-box'>
						<Image
							width={20}
							height={20}
							src='/imgs/united-kingdom 1.svg'
							alt='language'
							className='en'
						/>
						<button>English</button>
					</div>
					<Image
						width={20}
						height={20}
						src='/imgs/close 1.svg'
						alt='close'
						id='close-nav'
						onClick={onClose}
					/>
				</div>
				<div className='flex flex-col  gap-2 my-3'>
					<a href='#'>Sign up </a>
					<a href='#'>Login</a>
				</div>
			</div>
			<ul className='nav-links-phone'>
				<li>
					<a href='#Home'>Home</a>
				</li>
				<li>
					<a href='/pages/categories.html'>Services</a>
				</li>
				<li>
					<a href='/pages/event-list.html'>Event packages</a>
				</li>
				<li>
					<a href='/pages/event-details.html'>Offers</a>
				</li>
				<li>
					<a href='#Resturants'>Abouts us</a>
				</li>
				<li>
					<a href='#blogs'>Blog</a>
				</li>
			</ul>
		</div>
	);
};

export default Popup;
