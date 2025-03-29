"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { setUserLocale } from "@/i18n/services";
import Image from "next/image";

const LocaleSwitcher = () => {
	const currentLocale = useLocale();
	const [loading, setLoading] = useState(false);

	const onLocaleChange = async () => {
		setLoading(true);
		const newLocale = currentLocale === "en" ? "ar" : "en";
		await setUserLocale(newLocale);
		window.location.reload();
	};

	return (
		<div className='language-box flex items-center gap-2'>
			<Image
				width={28}
				height={28}
				src={"/imgs/united-kingdom 1.svg"}
				alt='language'
				className={currentLocale}
			/>
			<button
				onClick={onLocaleChange}
				disabled={loading}
			>
				{currentLocale === "en" ? "English" : "العربية"}
			</button>
		</div>
	);
};

export default LocaleSwitcher;
