/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'backend.martasieczkowska.com',
			},
		],
	},
}

module.exports = nextConfig
