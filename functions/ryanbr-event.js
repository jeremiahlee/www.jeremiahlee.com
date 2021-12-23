// https://plausible.io/docs/proxy/guides/cloudflare

export async function onRequest({ request }) {
	const forwardedRequest = new Request(request);
	forwardedRequest.headers.delete("cookie");
	return fetch("https://plausible.io/api/event", forwardedRequest);
}
