// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
// biome-ignore lint/style/noArguments: <explanation>
window.plausible = window.plausible || (() => { (window.plausible.q = window.plausible.q || []).push(arguments) });

const customPageviewProps = new Map();

// Preference for light or dark mode
if (window.matchMedia("(prefers-color-scheme: light)").matches) {
	customPageviewProps.set("prefers-color-scheme", "light");
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	customPageviewProps.set("prefers-color-scheme", "dark");
}

// Preference for less motion
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	customPageviewProps.set("prefers-reduced-motion", "reduce");
}

// Preference for more or less contrast
if (window.matchMedia("(prefers-contrast: more)").matches) {
	customPageviewProps.set("prefers-contrast", "more");
} else if (window.matchMedia("(prefers-contrast: less)").matches) {
	customPageviewProps.set("prefers-contrast", "less");
} else if (window.matchMedia("(prefers-contrast: custom)").matches) {
	customPageviewProps.set("prefers-contrast", "custom");
}

// HDR capable screens
if (window.matchMedia("(video-dynamic-range: high)").matches) {
	customPageviewProps.set("video-dynamic-range", "high");
}
if (window.matchMedia("(dynamic-range: high)").matches) {
	customPageviewProps.set("dynamic-range", "high");
}

if (customPageviewProps.size > 0) {
	plausible("pageview", { props: Object.fromEntries(customPageviewProps) });
}

// Web Monetization goal conversion
const monetizationLink = document.querySelector('link[rel="monetization"]');

if (monetizationLink) {
	monetizationLink.addEventListener(
		"monetization",
		() => {
			plausible(
				"MonetizationStart",
				{
					props: {
						path: document.location.pathname
					}
				}
			);
		},
		{
			once: true
		}
	);
}
