window.addEventListener(
	"DOMContentLoaded",
	(event) => {
		if (document.monetization) {
			document.monetization.addEventListener(
				"monetizationstart",
				() => {
					document.getElementById("coil-pitch").innerHTML = `<strong>Thank you for supporting creators like me through your <a href="https://webmonetization.org/">Web Monetization</a> subscription!<strong>`;
				}
			);
		}
	}
);
