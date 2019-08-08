const moment = require("moment");
const defaultCssPath = "/soul-class-style-badass.css";

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

    eleventyConfig.addHandlebarsHelper(
        "moment",
        function(date, format) {
            return moment(date).format(format);
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

    return {
        templateFormats: [
            "css",
            "hbs",
            "html",
            "json",
            "jpg",
            "md",
            "mp4",
            "png",
            "svg",
            "txt",
            "webmanifest",
            "webp",
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
