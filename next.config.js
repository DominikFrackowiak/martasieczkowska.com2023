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
				hostname: 'backend.martasieczkowska.com',
			},
		],
	},
}

module.exports = nextConfig
