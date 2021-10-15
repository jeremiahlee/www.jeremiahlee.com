window.addEventListener(
	"DOMContentLoaded",
	(event) => {
		const form = document.getElementById("contactCardForm");

		form.addEventListener(
			"submit",
			function gracefullySubmitForm(event) {
				fetch(
					event.target.action,
					{
						method: "POST",
						body: new URLSearchParams([...(new FormData(form))])
					}
				).then((response) => {
					alert("Thanks! I will email you my updated contact card.");
				}).catch((error) => {
					alert(error);
				});

				event.preventDefault();
			}
		);
	}
);
