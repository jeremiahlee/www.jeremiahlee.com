const moment = require("moment");
const defaultCssPath = "/soul-class-style-badass.css";
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
    eleventyConfig.addCollection(
        "mostRecentNowPost",
        function(collection) {
            const postsTaggedNow = collection.getFilteredByTag("now");
            const mostRecentPostTaggedNow = postsTaggedNow[postsTaggedNow.length - 1];
            return mostRecentPostTaggedNow;
        }
    );

    eleventyConfig.addCollection(
        "atomFeed",
        function(collection) {
            const postsTaggedBlog = collection.getFilteredByTag("posts");

            const postsTaggedNow = collection.getFilteredByTag("now");

            postsTaggedBlog.push(postsTaggedNow[postsTaggedNow.length - 1]);

            return postsTaggedBlog;
        }
    );

    // Like blogPostsByYear only excluding any featured/interviews/conference talks
    eleventyConfig.addCollection(
        "blogPostsByYear",
        function(collection) {
            /*
                We assume collection.getFilteredByTag is sorted date ascending.

                Return an array of objects containing `year` and `data` array of posts
                sorted descending, example:
                [
                    {
                        year: 1984,
                        data: [
                            posts here
                        ]
                    }, ...
                ]
            */

            const postsTaggedBlog = collection.getFilteredByTag("posts");

            const newCollection = [];

            let currentPostYearInCollection;

            for (let post of postsTaggedBlog) {
                const postYear = new Date(post.date).getUTCFullYear();

                if (postYear !== currentPostYearInCollection) {
                    newCollection.unshift({
                        year: postYear,
                        data: []
                    });
                    currentPostYearInCollection = postYear;
                }

                newCollection[0].data.unshift(post);
            }

            return newCollection;
        }
    );

    eleventyConfig.addCollection(
        "otherPostsByYear",
        function(collection) {
            /*
                We assume collection.getFilteredByTag is sorted date ascending.

                Return an array of objects containing `year` and `data` array of posts
                sorted descending, example:
                [
                    {
                        year: 1984,
                        data: [
                            posts here
                        ]
                    }, ...
                ]
            */

            const postsTaggedBlog = collection.getFilteredByTag("posts");

            const newCollection = [];

            let currentPostYearInCollection;

            for (let post of postsTaggedBlog) {
                if (
                    post.data.tags.includes("featured") ||
                    post.data.tags.includes("conferenceTalk") ||
                    post.data.tags.includes("featuredInterview")
                ) {
                    continue;
                }

                const postYear = new Date(post.date).getUTCFullYear();

                if (postYear !== currentPostYearInCollection) {
                    newCollection.unshift({
                        year: postYear,
                        data: []
                    });
                    currentPostYearInCollection = postYear;
                }

                newCollection[0].data.unshift(post);
            }

            return newCollection;
        }
    );

    eleventyConfig.addNunjucksFilter(
        "json",
        function(value) {
            return JSON.stringify(value);
        }
    );

    eleventyConfig.addHandlebarsHelper(
        "moment",
        function(date, format) {
            return moment(date).format(format);
        }
    );

    eleventyConfig.addHandlebarsHelper(
        "reverseArray",
        function(arr) {
            return [...arr].reverse();
        }
    );

    /*
        If `css` defined in front matter, an array is needed by Handlebars template.
        `css` may be a single item and therefore gets parsed as a string. Need to return it as an 1-element array.
        If "default" is a value, replace with path to default CSS file.
    */
    eleventyConfig.addHandlebarsHelper(
        "cssHelper",
        function(stylesheet) {
            if (stylesheet === "default") {
                return defaultCssPath;
            } else {
                return stylesheet;
            }
        }
    );

    eleventyConfig.addPassthroughCopy("scripts");
	eleventyConfig.addPassthroughCopy("site/**/*.js");
	eleventyConfig.addPassthroughCopy("site/_redirects");

    eleventyConfig.addPlugin(pluginRss);

    return {
        templateFormats: [
            "css",
            "hbs",
            "html",
            "json",
            "jpg",
            "m4v",
            "md",
            "mp4",
            "njk",
            "png",
            "svg",
            "ttf",
            "txt",
            "webmanifest",
            "webm",
            "webp",
            "woff",
            "woff2",
            "xml"
        ],

        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "hbs",
        passthroughFileCopy: true,
        dir: {
            includes: "../eleventy-includes",
            input: "site",
            output: "dist"
        }
    }
};
