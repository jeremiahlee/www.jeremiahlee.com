window.addEventListener(
	"DOMContentLoaded",
	(event) => {
		function showContent() {
			document.getElementById("exclusive").classList.remove("hidden");
			document.getElementById("pitch").classList.add("hidden");
			window.scroll(0,0);
		}

		if (document.monetization) {
			document.monetization.addEventListener(
				"monetizationstart",
				showContent
			);
		}

		document.getElementById("skip-button").addEventListener(
			"click",
			showContent
		);
	}
);
