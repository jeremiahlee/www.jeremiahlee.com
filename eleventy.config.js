import { Temporal } from "temporal-polyfill";
import pluginRss from "@11ty/eleventy-plugin-rss";
import { EleventyI18nPlugin } from "@11ty/eleventy";
import handlebarsPlugin from "@11ty/eleventy-plugin-handlebars";

const ordinalRules = new Intl.PluralRules("en-US", { type: "ordinal" });
const ORDINAL_SUFFIXES = { one: "st", two: "nd", few: "rd", other: "th" };
const weekdayMonthFormat = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", timeZone: "UTC" });
const timeFormat = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: "UTC" });

function pad(number, width = 2) {
	return String(number).padStart(width, "0");
}

function ordinal(day) {
	return `${day}${ORDINAL_SUFFIXES[ordinalRules.select(day)] ?? "th"}`;
}

// Front matter `date`/`updated` values are quoted strings (see YAML front matter)
// so their authored UTC offset survives Eleventy's data cascade instead of being
// collapsed to a JS Date, which only stores a UTC instant.
function toZonedDateTime(date) {
	const isoString = date instanceof Date ? date.toISOString() : String(date);
	const offsetMatch = isoString.match(/([+-]\d{2}:?\d{2}|Z)$/);
	const offset = !offsetMatch || offsetMatch[0] === "Z" ? "+00:00" : offsetMatch[0];
	return Temporal.Instant.from(isoString).toZonedDateTimeISO(offset);
}

// Intl.DateTimeFormat can't format Temporal instances from a polyfill (only the
// native/global Temporal classes pass its brand check), so weekday/month names
// are read off a same-wall-clock UTC Date instead.
function formatDate(date, format) {
	const zdt = toZonedDateTime(date);
	const wallClock = new Date(Date.UTC(zdt.year, zdt.month - 1, zdt.day, zdt.hour, zdt.minute, zdt.second));

	switch (format) {
		case "iso":
			return `${pad(zdt.year, 4)}-${pad(zdt.month)}-${pad(zdt.day)}T${pad(zdt.hour)}:${pad(zdt.minute)}:${pad(zdt.second)}${zdt.offset.replace(":", "")}`;
		case "isoDate":
			return zdt.toPlainDate().toString();
		case "year":
			return String(zdt.year);
		case "long": {
			const parts = Object.fromEntries(weekdayMonthFormat.formatToParts(wallClock).map((part) => [part.type, part.value]));
			return `${parts.weekday}, ${parts.month} ${ordinal(zdt.day)} ${zdt.year}`;
		}
		case "longWithTime": {
			const parts = Object.fromEntries(weekdayMonthFormat.formatToParts(wallClock).map((part) => [part.type, part.value]));
			return `${parts.weekday}, ${parts.month} ${zdt.day}, ${zdt.year} ${timeFormat.format(wallClock)}`;
		}
		default:
			throw new Error(`Unknown date format: ${format}`);
	}
}

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
		"formatDate",
		function(date, format) {
			return formatDate(date, format);
		}
	);

	// Front matter `date`/`updated` are quoted strings (see comment above formatDate);
	// eleventy-plugin-rss's dateToRfc3339/dateToRfc822 filters require a JS Date.
	eleventyConfig.addFilter(
		"toDate",
		function(value) {
			return new Date(value);
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
			"gif",
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
