window.addEventListener(
	"DOMContentLoaded",
	(event) => {
		let story1 = document.getElementById("story1");
		let story2 = document.getElementById("story2");
		let story3 = document.getElementById("story3");
		const delay = 8000;

		function showStory1() {
			story1.classList.remove("hidden");
			story2.classList.add("hidden");
			story3.classList.add("hidden");
			setTimeout(showStory2, delay);
		}
		function showStory2() {
			story1.classList.add("hidden");
			story2.classList.remove("hidden");
			story3.classList.add("hidden");
			setTimeout(showStory3, delay);
		}
		function showStory3() {
			story1.classList.add("hidden");
			story2.classList.add("hidden");
			story3.classList.remove("hidden");
			setTimeout(showStory1, delay);
		}

		setTimeout(showStory2, delay);
	}
);
