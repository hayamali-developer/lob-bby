'use server';

import { Locale, defaultLocale } from '@/i18n/config';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'v-verse-locale';

export async function getUserLocale() {
	const cookieStore = await cookies(); // Await cookies()
	return cookieStore.get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
	const cookieStore = await cookies(); // Await cookies()
	cookieStore.set(COOKIE_NAME, locale);
}


// 'use server';

// import { Locale, defaultLocale } from '@/i18n/config';
// import { cookies } from 'next/headers';

// const COOKIE_NAME = 'v-verse-locale';

// export async function getUserLocale() {
//   // Await the promise and then get the cookie value
//   const cookieStore = await cookies();
//   return cookieStore.get(COOKIE_NAME)?.value || defaultLocale;
// }

// export async function setUserLocale(locale: Locale) {
//   // Await the promise and then set the cookie
//   const cookieStore = await cookies();
//   cookieStore.set(COOKIE_NAME, locale);
// }
