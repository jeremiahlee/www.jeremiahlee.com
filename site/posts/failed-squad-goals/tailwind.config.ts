import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

export default {
	content: [
		"./site/posts/failed-squad-goals/failed-squad-goals.html",
		"./eleventy-includes/failed-squad-goals.hbs"
	],
	plugins: [
		forms
	]
} satisfies Config
