window.addEventListener(
	"DOMContentLoaded",
	(event) => {
		const today = new Date();

		const applicationDate = new Date("2022-04-11T20:20:00+02:00");

		let daysSinceApplying;

		// If the user's clock is in the past, don't calculate days
		if (applicationDate.valueOf() > today.valueOf()) {
			daysSinceApplying = 'Many';
		} else {
			daysSinceApplying = Math.floor((today.valueOf() - applicationDate.valueOf()) / 1000 / 60 / 60 / 24).toString();
		}

		// TODO: Once citizenship approved, replace the calculation with the realized number of days waiting.

		const element = document.getElementById("immigration-status");

		element.innerHTML = `<div class="bg-sky-700 border-8 border-amber-300 p-4 rounded-xl text-center text-amber-300 lg:w-min mx-auto"><span class="block font-bold text-7xl">${daysSinceApplying}</span> <span class="block text-xl tracking-widest uppercase">days</span> <span class="block">waiting for a decision</span></div>`;
	}
);
