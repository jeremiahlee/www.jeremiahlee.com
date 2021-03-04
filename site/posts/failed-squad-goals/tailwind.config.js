module.exports = {
    purge: {
        enabled: true,
        content: [
            "./site/posts/failed-squad-goals/failed-squad-goals.md",
            "./eleventy-includes/failed-squad-goals.hbs"
        ]
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
