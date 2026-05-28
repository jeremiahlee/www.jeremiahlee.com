import moment from "moment";
import pluginRss from "@11ty/eleventy-plugin-rss";
import { EleventyI18nPlugin } from "@11ty/eleventy";
import handlebarsPlugin from "@11ty/eleventy-plugin-handlebars";

export default function(eleventyConfig) {
	eleventyConfig.addPlugin(handlebarsPlugin);
	
	eleventyConfig.addPlugin(EleventyI18nPlugin, {
		defaultLanguage: "en",
	});

	eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
		if (data.draft) { // && process.env.ELEVENTY_RUN_MODE === "build") {
			return false;
		}
	});

	eleventyConfig.addCollection(
		"mostRecentNowPost",
		function(collection) {
			console.log(`Now: ${collection.getFilteredByTag("now").length}`);
			console.log(collection.getFilteredByTag("now").at(-1));
			return collection.getFilteredByTag("now").at(-1);
		}
	);

	eleventyConfig.addCollection(
		"nowPageUpdates",
		function(collection) {
			return collection.getFilteredByTag("now");
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

	eleventyConfig.addFilter(
		"moment",
		function(date, format) {
			return moment(date).format(format);
		}
	);

	eleventyConfig.addFilter(
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
	eleventyConfig.addFilter(
		"cssHelper",
		function(stylesheet) {
			if (stylesheet === "default") {
				return "/soul-class-style-badass.css";
			} else {
				return stylesheet;
			}
		}
	);

	eleventyConfig.addPassthroughCopy("functions");
	eleventyConfig.addPassthroughCopy("scripts");
	eleventyConfig.addPassthroughCopy("campaigns");
	eleventyConfig.addPassthroughCopy("site/**/*.js");
	eleventyConfig.addPassthroughCopy("site/_headers");
	eleventyConfig.addPassthroughCopy("site/_redirects");
	eleventyConfig.addPassthroughCopy("site/.well-known");

	eleventyConfig.addPlugin(pluginRss);



	return {
		templateFormats: [
			"css",
			"hbs",
			"html",
			"json",
			"jpeg",
			"jpg",
			"m4v",
			
			"md",
			"mp4",
			"njk",
			"otf",
			"pdf",
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
			input: "site",
			output: "dist"
		}
	}
};
