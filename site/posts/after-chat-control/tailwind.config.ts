import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
	content: [
		"./site/posts/after-chat-control/index.html",
		"./eleventy-includes/after-chat-control.hbs"
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
						mark: {
							backgroundColor: "rgb(245 243 255)" // bg-violet-50
						}
					},
				},
			},
		},
	},
	plugins: [
		typography
	],
} satisfies Config
