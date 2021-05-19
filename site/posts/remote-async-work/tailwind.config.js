module.exports = {
    mode: "jit",
    purge: {
        enabled: true,
        content: [
            "./*.html",
            "./**/*.html",
            "../../../eleventy-includes/remote-async-work.hbs"
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
		extend: {
			colors: {
				red: {},
				green: {
					DEFAULT: "#0089AB"
				},
				purple: {
					DEFAULT: "#753478"
				},
				yellow: {
					DEFAULT: "#EFB400"
				}
			},
			gridRowStart: {
				"8": "8",
				"9": "9",
				"10": "10"
			},
			gridRowEnd: {
				"8": "8",
				"9": "9",
				"10": "10",
				"11": "11"
			}
		}
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography")
    ]
}
