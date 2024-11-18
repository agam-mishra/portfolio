import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				'experience': "url('/public/tech.webp')",
			},
		},
	},
	plugins: [
		function ({ addUtilities }: any) {
			addUtilities({
				'.scrollbar-hide': {
					/* Hide scrollbar for Webkit-based browsers (Chrome, Safari) */
					'&::-webkit-scrollbar': {
						display: 'none',
					},
					/* Hide scrollbar for Firefox */
					'-ms-overflow-style': 'none',
					'scrollbar-width': 'none',
				},
			});
		},
	],
};
export default config;
