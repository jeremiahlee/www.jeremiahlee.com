window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) };

if (document.monetization) {
	document.monetization.addEventListener(
		"monetizationstart",
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