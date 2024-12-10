/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		domains: ['cdn.prod.website-files.com', 'assets-global.website-files.com']
	},
	backgroundImage: {
		'experience-bg': "url('public/tech.webp')",
		'footer-texture': "url('/img/footer-texture.png')"
	},
};

export default nextConfig;
