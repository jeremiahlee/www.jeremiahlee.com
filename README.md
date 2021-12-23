# JeremiahLee.com

To deploy:

```
npm run build
cd dist
vercel --prod
```


To have multiple stylesheets, specify a list of CSS paths in the front matter. Include `default` to include the default stylesheet. Example:

```
css:
    - default
    - ./explicitly-me.css
```

To exclude a post from the collection, add this to the front matter:
`eleventyExcludeFromCollections: true`


<div class="mb-4 text-2xl text-center text-purple-500">— ❖ —</div>


?ref=JeremiahLee


`tailwindcss-cli -i ./site/posts/lgbtq-erg/lgbtq-erg.source.css -o ./site/posts/lgbtq-erg/lgbtq-erg.compiled.css --config ./site/posts/lgbtq-erg/tailwind.config.js -w`


tailwindcss-cli -i INPUT.css -o OUTPUT.css --config PATH/tailwind.config.js



# CLOUDFLARE

`npx wrangler pages dev ./dist --binding sendgrid_api_key=`
