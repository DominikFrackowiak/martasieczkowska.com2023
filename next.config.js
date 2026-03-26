/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
			},
			{
				protocol: 'http',
				hostname: 'martasieczkowska.kraftweb.eu',
			},
			{
				protocol: 'https',
				hostname: 'martasieczkowska.kraftweb.eu',
			},
		],
	},
}

module.exports = nextConfig
