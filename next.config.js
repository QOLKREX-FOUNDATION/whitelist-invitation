/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
};

module.exports = {
	nextConfig,
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: `https://api1.cryptoblockperu.qolkrex.foundation/:path*`,
			},
			{
				source: "/api/:path*",
				destination: `https://apitestnet.qolkrex.foundation/:path*`,
			},
		];
	},
};

