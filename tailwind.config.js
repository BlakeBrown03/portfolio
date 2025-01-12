/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true
		},
		extend: {
			fontFamily: {
				metamorphous: ["Metamorphous", ...fontFamily.serif]
			}
		}
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography")
	],
	darkMode: "class"
};
