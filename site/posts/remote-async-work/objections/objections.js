window.addEventListener(
	"DOMContentLoaded",
	(event) => {
		if (document.monetization) {
			document.monetization.addEventListener(
				"monetizationstart",
				() => {
					document.getElementById("exclusive").classList.remove("hidden");
					document.getElementById("pitch").classList.add("hidden");
				}
			);
		}
	}
);
