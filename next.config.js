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
				hostname: 'hpvpzir.cluster027.hosting.ovh.net',
			},
		],
	},
}

module.exports = nextConfig
