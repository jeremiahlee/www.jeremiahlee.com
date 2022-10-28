try {
	if (typeof window.chrome !== "undefined") {
		let variant = "";

		if (typeof navigator.brave !== "undefined") {
			variant = "-brave";
		} else if (navigator.userAgentData.brands.find((brand) => brand.brand == "Microsoft Edge")) {
			variant = "-edge";
		} else if (navigator.userAgentData.brands.find((brand) => brand.brand == "Opera")) {
			variant = "-opera";
		} else if (navigator.userAgent.indexOf('SamsungBrowser') >= 0) {
			variant = "-samsung";
		}

		fetch(`/campaigns/firefox/partial${variant}.html`)
			.then((response) => response.text())
			.then((html) => {
				document.body.insertAdjacentHTML("beforeend", html);
			})
			.catch((error) => {
				console.warn(error);
			});
	}
} catch (error) {
	console.warn(error);
}
