import Image from "next/image";
import React from "react";
import Buttons from "./Buttons";

function Footer() {
	// Footer data
	const footerData = [
		{
			title: "Services",
			links: [
				{ name: "Restaurants", href: "#" },
				{ name: "Event packages", href: "#" },
				{ name: "Explore events", href: "#" },
			],
		},
		{
			title: "Terms and settings",
			links: [
				{ name: "Privacy", href: "#" },
				{ name: "Terms and conditions", href: "#" },
			],
		},
		{
			title: "Partner",
			links: [
				{ name: "Partner login", href: "#" },
				{ name: "Add list for your service", href: "#" },
			],
		},
	];

	const socialLinks = [
		{ src: "/imgs/facebook.svg", alt: "facebook", href: "#" },
		{ src: "/imgs/youtube 1.svg", alt: "youtube", href: "#" },
		{ src: "/imgs/instagram 1.svg", alt: "instagram", href: "#" },
	];

	return (
		<footer className='bg-secondary text-white pt-5 pb-4 px-2 sm:px-16'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
					{/* Loop through footerData */}
					{footerData.map((section, index) => (
						<div key={index}>
							<h5 className='font-bold text-xl pb-2'>{section.title}</h5>
							<ul className='list-none'>
								{section.links.map((link, idx) => (
									<li key={idx}>
										<a
											href={link.href}
											className='text-white no-underline hover:underline'
										>
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}

					{/* Contact Section */}
					<div className='flex flex-col justify-between'>
						<h5 className='font-bold text-xl pb-2'>Contact us</h5>
						<h6 className='font-bold'>Be our partner</h6>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
					{/* Social Links */}
					<div className='flex space-x-3'>
						{socialLinks.map((link, index) => (
							<a
								key={index}
								href={link.href}
							>
								<Image
									width={40}
									height={40}
									src={link.src}
									alt={link.alt}
								/>
							</a>
						))}
					</div>

					{/* Subscription Form */}
					<div className='flex sm:grid grid-cols-4 gap-1 col-span-2'>
						<input
							type='email'
							className='form-input rounded-md p-2 col-span-2'
							placeholder='Enter your email'
						/>
						{/* <button
							className='bg-primary text-white rounded-md px-4 py-2'
							type='submit'
						>
							Subscription
						</button> */}
						<Buttons
							text='Subscribe'
							className={"px-4 py-2"}
						/>
					</div>

					{/* Sign-up Button */}
					<div>
						<button className='bg-primary text-white rounded-md px-4 py-2'>
							Sign up
						</button>
					</div>
				</div>

				<div className='text-center mt-3'>
					<p className='text-gray-400 mb-0'>
						Lobby lane 2024 © All rights reserved
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
