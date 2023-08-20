/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			lineClamp: {
				7: "7",
			},
		},
	},
	plugins: [],
};
