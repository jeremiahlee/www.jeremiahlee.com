module.exports = {
    purge: {
        enabled: true,
        content: [
            "./site/posts/last-burp-of-hope/last-burp-of-hope.html",
            "./eleventy-includes/last-burp-of-hope.hbs"
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
