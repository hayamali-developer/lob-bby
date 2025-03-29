import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Lobby Lane",
	description: "Lobby Lane",
};

export default async function RootLayout({ children }) {
	const locale = await getLocale();
	const messages = await getMessages();
	// const dir = getLangDir(locale);
	// const dir = locale === "ar" ? "rtl" : "ltr";
	const dir = "ltr"; // Default to left-to-right for simplicity
	return (
		<html
			lang={locale}
			// dir={dir}
		>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<NextIntlClientProvider messages={messages}>
					<Header />
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
