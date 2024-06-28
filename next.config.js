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
				hostname: 'backendmartas.rastasenmadrid.atthost24.pl',
			},
		],
	},
}

module.exports = nextConfig
