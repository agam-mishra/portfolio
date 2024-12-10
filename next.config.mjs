/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'portfolio'; // Replace with your repository name

const nextConfig = {
	images: {
		domains: ['cdn.prod.website-files.com', 'assets-global.website-files.com']
	},
	backgroundImage: {
		'experience-bg': "url('public/tech.webp')",
		'footer-texture': "url('/img/footer-texture.png')"
	},
	output: 'export',
	assetPrefix: isGithubPages ? `/${repoName}/` : '',
	trailingSlash: true,
};

export default nextConfig;
