window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) };

const monetizationLink = document.querySelector('link[rel="monetization"]');

if (monetizationLink) {
	link.addEventListener(
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
