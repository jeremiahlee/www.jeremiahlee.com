const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const purgecss = require("@fullhuman/postcss-purgecss");
const tailwindcss = require("tailwindcss");

/**
 * Custom PurgeCSS Extractor
 * https://github.com/FullHuman/purgecss
 * https://github.com/FullHuman/purgecss-webpack-plugin
 */
class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-z0-9-:\/]+/g);
    }
}

module.exports = {
    plugins: [
        tailwindcss("tailwind.config.js"),
        cssnano({
            preset: "default",
        }),
        purgecss({
            content: ["dist/**/*.html"],
            extractors: [{
                extractor: TailwindExtractor,
                extensions: ["html"]
            }]
        }),
        autoprefixer
    ]
}
