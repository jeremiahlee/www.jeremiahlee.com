window.addEventListener(
	"DOMContentLoaded",
	(event) => {
		window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) };

		plausible(
			"404",
			{
				props: {
					path: document.location.pathname
				}
			}
		);
	}
);
