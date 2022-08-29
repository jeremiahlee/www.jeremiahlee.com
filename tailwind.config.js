module.exports = {
	content: [
		"./dist/**/*.html",
		"./dist/**/*.js"
	],
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms")
	],
}
