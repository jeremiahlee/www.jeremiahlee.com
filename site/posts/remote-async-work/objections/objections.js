window.addEventListener(
	"DOMContentLoaded",
	(event) => {
		function showContent() {
			document.getElementById("exclusive").classList.remove("hidden");
			document.getElementById("pitch").classList.add("hidden");
		}

		if (document.monetization) {
			document.monetization.addEventListener(
				"monetizationstart",
				showContent
			);
		} else {
			const urlParameters = new URLSearchParams(document.location.search.substring(1));
			const accessCode = urlParameters.get("accessCode");
			if (accessCode === "ViaReal") {
				showContent();
			}
		}
	}
);
