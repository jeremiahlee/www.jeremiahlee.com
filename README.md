# JeremiahLee.com

To have multiple stylesheets, specify a list of CSS paths in the front matter. Include `default` to include the default stylesheet. Example:

```
css:
    - default
    - ./explicitly-me.css
```

To exclude a post from the collection, add this to the front matter:
`eleventyExcludeFromCollections: true`


<div class="mb-4 text-2xl text-center text-violet-500">— ❖ —</div>


?ref=JeremiahLee


# CLOUDFLARE

`npx wrangler pages dev ./dist --binding sendgrid_api_key=`

# Percy

`PERCY_TOKEN= npx percy snapshot percy.yaml --dry-run`
