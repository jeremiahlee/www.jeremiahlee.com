module.exports = {
	mode: "jit",
    purge: [
		"./dist/**/*.html",
		"./dist/**/*.js"
	],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography")
    ],
}
