export async function onRequestPost(context) {
	// Confirm necessary env vars
	if (!context.env.sendgrid_api_key) {
		console.error(`sendgrid_api_key not defined.`);
		return new Response("Server error", { status: 500 });
	}

	// Confirm form data with required fields are present
	const contentType = context.request.headers.get("content-type") || "";
	if (!contentType.includes("form")) {
		return new Response("Name and email required.", { status: 400 });
	}

	let formData = await context.request.formData();

	if (!formData.has("firstName") || !formData.has("email")) {
		return new Response("Name and email required.", { status: 400 });
	}

	// Compose the email
	// Send the email
	// Then respond
	const emailBody = `
First name: ${formData.get("firstName") || ""}
Last name: ${formData.get("lastName") || ""}
Email: ${formData.get("email") || ""}
Phone: ${formData.get("phone") || ""}
Birthday: ${formData.get("birthday") || ""}
Pronoun: ${formData.get("pronoun") || ""}
`;

	const requestBody = {
		personalizations: [{ to: [{ email: `hello@jeremiahlee.com` }] }],
		from: { email: `delete-facebook@sms.jeremiahlee.com` },
		subject: `Contact information for ${formData.get("firstName")} ${(formData.get("lastName") || "")}`,
		content: [
			{
				type: `text/plain`,
				value: emailBody,
			},
		],
	};

	const requestBodyString = JSON.stringify(requestBody);

	let sendgridRequest = await fetch(`https://api.sendgrid.com/v3/mail/send`, {
		method: `POST`,
		body: requestBodyString,
		headers: {
			"Content-Type": `application/json`,
			Authorization: `Bearer ${context.env.sendgrid_api_key}`,
		}
	});

	if (sendgridRequest.status < 400) {
		return new Response("Success", { status: 200 });
	} else {
		return new Response("Server error", { status: 500 });
	}
}
