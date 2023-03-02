const KONAMI_CODE = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];

let cursor = 0;

document.addEventListener(
	"keydown",
	(evt) => {
		if (evt.code === KONAMI_CODE[cursor]) {
			cursor++;
		} else {
			cursor = 0;
		}

		if (cursor === KONAMI_CODE.length) {
			alert("We keep moving forward, opening new doors, and doing new things, because we’re curious and curiosity keeps leading us down new paths.");
			document.location.assign("/easter-eggs/");
		}
	}
);
