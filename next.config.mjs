import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["127.0.0.1", "localhost", "your-laravel-api.com"], // Add your Laravel API domain here
	},
	experimental: {
		serverActions: true,
	},
};
export default withNextIntl(nextConfig);
//module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = {
//     images: {
//       domains: ["127.0.0.1", "your-laravel-api.com"],
//     },
//   };
// export default nextConfig;
