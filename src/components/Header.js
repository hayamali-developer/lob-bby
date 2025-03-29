"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PhoneNavbar from "./PhoneNavbar";
import Image from "next/image";
import PersonalProfile from "./PersonalProfile";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/utils/LocaleSwitcher";

function Header() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [isLogedIn, setisLogedIn] = useState(false);
	const t = useTranslations("navbar");
	const openPopup = () => setIsPopupOpen(true);
	const closePopup = () => setIsPopupOpen(false);

	const links = [
		{
			name: "Home",
			href: "/",
		},
		{
			name: "Services",
			href: "/categories",
		},
		{
			name: "Event packages",
			href: "/event-list",
		},
		{
			name: "Offers",
			href: "/offers",
		},
		{
			name: "Abouts us",
			href: "/about-us",
		},
		{
			name: "Blog",
			href: "/blogs",
		},
	];

	return (
		<header className='main-header'>
			<div className='header'>
				<div className='logo'>
					<Link href='/'>
						<Image
							width={320}
							height={320}
							src='/imgs/logo.svg'
							alt='logo'
						/>
					</Link>
				</div>
				<PhoneNavbar
					isOpen={isPopupOpen}
					onClose={closePopup}
				/>
				<div className='top-links'>
					<div className='small-lang'>
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

						<LocaleSwitcher />
					</div>
					{isLogedIn ? (
						<PersonalProfile />
					) : (
						<>
							<Link href='/auth/'>{t("signUp")} </Link>
							<Link href='/auth/'>{t("login")}</Link>
						</>
					)}
				</div>
				<div className='menu-toggle'>
					<Image
						width={40}
						height={40}
						src='/imgs/menu.svg'
						alt='Toggle Menu'
						id='toggle-button'
						onClick={openPopup}
					/>
				</div>
			</div>
			<nav className='navbar pb-4'>
				<ul className='nav-links'>
					{links.map((link) => (
						<li key={link.name}>
							<a href={link.href}>{link.name}</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
