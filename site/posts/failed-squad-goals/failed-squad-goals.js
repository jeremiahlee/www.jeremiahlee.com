window.addEventListener(
	"DOMContentLoaded",
	(event) => {
		// Turn the vidoes into still images for people who prefer reduced motion
		if (matchMedia("(prefers-reduced-motion: reduce)").matches === true) {
			document.querySelectorAll("video").forEach(
				(video) => {
					video.pause();
				}
			);
		}

		// Thank people who pay
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
