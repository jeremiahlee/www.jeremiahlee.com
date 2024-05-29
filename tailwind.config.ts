import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

export default {
	content: [
		"./dist/**/*.html",
		"./dist/**/*.js"
	],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						a: {
							color: "rgb(55 65 81)", // gray-700
							fontWeight: 400,
							textDecorationColor: "rgb(75 85 99)", // gray-600
							textDecorationStyle: "dotted",
							textDecorationThickness: "1px"
						},
					},
				},
			},
		},
	},
	plugins: [
		typography,
		forms
	],
} satisfies Config
