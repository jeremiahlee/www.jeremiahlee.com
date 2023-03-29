import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

export default {
	content: [
		"./dist/**/*.html",
		"./dist/**/*.js"
	],
	theme: {
		extend: {},
	},
	plugins: [
		typography,
		forms
	],
} satisfies Config
