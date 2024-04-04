// based on https://plausible.io/docs/excluding-localstorage

window.addEventListener("load", function () {
	var exclusionState = window.localStorage.plausible_ignore == "true";

	if (exclusionState) {
		document.getElementById("plausible_not").style.display = "none";
		document.getElementById("plausible_yes").style.display = "inline";
		document.getElementById("plausible_button").innerHTML = "Stop excluding my visits";
	} else {
		document.getElementById("plausible_yes").style.display = "none";
		document.getElementById("plausible_not").style.display = "inline";
		document.getElementById("plausible_button").innerHTML = "Exclude my visits";
	}
});

function toggleExclusion() {
	var exclusionState = window.localStorage.plausible_ignore == "true";

	if (exclusionState) {
		delete window.localStorage.plausible_ignore;
		document.getElementById("plausible_yes").style.display = "none";
		document.getElementById("plausible_not").style.display = "inline"
		document.getElementById("plausible_button").innerHTML = 'Exclude my visits';
	} else {
		window.localStorage.plausible_ignore = "true";
		document.getElementById("plausible_not").style.display = "none";
		document.getElementById("plausible_yes").style.display = "inline";
		document.getElementById("plausible_button").innerHTML = "Stop excluding my visits";
	}
}
