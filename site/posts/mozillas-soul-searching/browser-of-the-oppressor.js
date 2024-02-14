const dialog = document.getElementById("chromeWarning");

if (typeof window.chrome !== "undefined") {
	dialog.showModal();
}
