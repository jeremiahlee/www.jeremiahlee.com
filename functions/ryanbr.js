// https://plausible.io/docs/proxy/guides/cloudflare

export async function onRequestGet(context) {
	let forwardedRequest = await caches.default.match(context.request);

	if (!forwardedRequest) {
		forwardedRequest = await fetch("https://plausible.io/js/script.manual.outbound-links.js");
		context.waitUntil(caches.default.put(context.request, forwardedRequest.clone()));
	}

	return forwardedRequest;
}
