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
];

const nowConfig = {
    version: 2,
    "name": "www",
    "alias": [
        "jeremiahlee.com",
        "www.jeremiahlee.com"
    ],
    routes: []
};

redirects.forEach(
    (redirect) => {
        nowConfig.routes.push({
            src: redirect[0],
            status: 301,
            headers: { "Location": redirect[1] }
        });

        nowConfig.routes.push({
            src: redirect[0].slice(0, -1),
            status: 301,
            headers: { "Location": redirect[1] }
        });
    }
);

fs.writeFile("./dist/now.json",
    JSON.stringify(nowConfig),
    function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    }
);