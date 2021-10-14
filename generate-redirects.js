// https://zeit.co/docs/v2/advanced/routes/?query=redirect
// now.json

const fs = require("fs");

const redirects = [
	["/blog/", "/posts/"],
	["/blog/2019/07/10/making-fitbitos-watchfaces/", "/posts/making-fitbitos-watchfaces/"],
	["/blog/2019/06/13/net-magazine-tab-tosser/", "/posts/net-magazine-tab-tosser-interview/"],
	["/blog/2019/02/03/tab-tosser/", "/posts/introducing-tab-tosser/"],
	["/blog/2017/10/10/pragmatic-design-with-json-api/", "/posts/json-api-your-smart-default/"],
	["/blog/2017/09/17/linkedin-web-app/", "/posts/linkedin-web-app/"],
	["/blog/2017/09/09/mark-fish/", "/posts/mark-fish/"],
	["/blog/2016/12/11/the-music-that-moves-me/", "/posts/the-music-that-moves-me/"],
	["/blog/2016/11/04/fitbit-api-strategy-and-practice/", "/posts/fitbit-api-strategy-and-practice/"],
	["/blog/2016/10/16/2016-11-voting/", "/posts/2016-11-voting/"],
	["/blog/2016/10/07/stop-cyber-scaring-us/", "/posts/stop-cyber-scaring-us/"],
	["/blog/2016/06/26/why-we-march/", "/posts/why-we-march/"],
	["/blog/2016/05/10/the-mary-vinoskey-cohick-studio/", "/posts/the-mary-vinoskey-cohick-studio/"],
	["/blog/2013/06/06/healthier-happier-at-fitbit/", "/posts/healthier-happier-at-fitbit/"],
	["/blog/2013/04/28/cross-posting-to-twitter-from-adn/", "/posts/cross-posting-to-twitter-from-adn/"],
	["/blog/2008/08/07/atheist-media/", "/posts/atheist-media/"],
	["/blog/2008/08/05/meaning-of-life-interview/", "/posts/meaning-of-life-interview/"],
	["/blog/2008/07/30/fairy-tale-ending/", "/posts/fairy-tale-ending/"],
	["/blog/2007/12/26/xmas-prayer/","/posts/xmas-prayer/"],
	["/blog/2007/05/13/evvy-26/", "/posts/evvy-26/"],
	["/blog/2005/07/30/explicitly-me/", "/posts/explicitly-me/"],
	["/blog/2003/05/10/mom-monologue/", "/posts/mom-monologue/"],
	["/rsvp/", "https://jeremiahlee.typeform.com/to/tsZCL1"],
	["/posts/failed-squad-goals", "/posts/failed-squad-goals/"]
];

// https://github.com/easylist/easylist/commit/449d1e19a774132c66e53dad73a642de434b8dc7
const nowConfig = {
	headers: [
		{
			"source": "/(.*)",
			"headers" : [
				{
					"key" : "X-Frame-Options",
					"value" : "DENY"
				},
				{
					"key" : "Content-Security-Policy",
					"value" : "form-action 'self' https://api.jeremiahlee.com; frame-ancestors 'none'; frame-src https://hcaptcha.com https://*.hcaptcha.com https://player.vimeo.com https://cinnamon.video https://embed.ted.com https://www.youtube-nocookie.com; object-src 'none'; script-src 'self' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com https://platform.twitter.com https://www.instagram.com; style-src 'self' https://hcaptcha.com https://*.hcaptcha.com; report-uri https://9d7aca2d869f1b1babd325b9430f2467.report-uri.com/r/d/csp/enforce"
				}
			]
		}
	],
	redirects: [],
	rewrites: [
		{ "source": "/ryanbr.js", "destination": "https://plausible.io/js/plausible.outbound-links.js" },
		{ "source": "/ryanbr-event", "destination": "https://plausible.io/api/event" }
	]
};

redirects.forEach(
	(redirect) => {
		nowConfig.redirects.push({
			source: redirect[0],
			destination: redirect[1],
			permanent: true
		});
	}
);

fs.writeFile(
	"./vercel.json",
	JSON.stringify(nowConfig),
	function (err) {
		if (err) {
			return console.log(err);
		}

		console.log("Writing ./vercel.json");
	}
);
