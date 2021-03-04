TODO:
- Make square and wide images for all posts
- Magazine layout table of contents

TAGS:
journal
rants
interview
technology
conferenceTalk
activism
featured
politics


TAG SEQUENCE:
- post
- featured / conferenceTalk / interview
- [primary subject because there could be multiple]



npx tailwindcss-cli@latest build ./src/tailwind.css -o ./dist/tailwind.css

NODE_ENV=production npx tailwindcss-cli@latest build css/style.css -o site/soul-class-style-badass.css





Objective: Recreate what I have today but using Tailwind and this new static site generator

Steps:
- [x] Get something building with the new generator
- [x] Get index page building with new generator
- [x] Get about and contact pages building with the new generator
- [x] Get now page building with the new generator
    - Only the latest post appears on the index
- [x] Get blog posts building with the new generator
- [x] Get archive page building with the new generator
- [x] Index page port
    - [x] Mastodon approval
- [x] About page port
- [x] Contact page port
- [x] Best for me page port
- [x] Projects page port
- [x] Speaking page port
- [x] Style index layout
- [x] Style page layouts
- [x] Style now layout
- [x] Style archive layout
- [x] Style post layout
- [x] Import content and test
- [x] All the meta tags in the head
    - [x] social images
    - [x] permalinks
    - [x] favicons of every kind
- [x] adjust conference talk layouts
    - [x] Add ids to JSON API talk
- [x] QA
    - [x] Looks right on all devices
    - [x] Social Preview images work
    - [x] 404 links redirect
- [x] Clean up slug, permalink, original-id metadata
- [x] Alphabetize metadata
- [x] Move layouts out of the /site folder
- [x] Blog override with post-specific styles with build process
- [x] Common headers shared in template file?
- [x] favicons
- [x] Get date tiemstamps into Google search results
    - [x] remove small tag
    - [x] remove updated front matter where it's unnecessary
- [x] image for Goog with JSON-LD
- [x] Add 'product' page markup with JSON-LD
- [x] Make Eleventy respect the time zone it was written in ZZ
- [x] Add manifest <link rel="manifest" href="/destiny.webmanifest" />
- [x] Add the additional icon sizes

- [ ] Port Tab Tosser product page over
- [ ] typographer quotes
- [x] Add Atom XML feed

- [ ] O'Reilly talk on UX research methods for Web API design
- [ ] Original DX article for UX magazine

- [ ] Web mentions as a Cloudflare worker?
- [x] Separate blog posts by type

- [x] 404 page that reports to Plausible
- [x] outbound link tracking with the new Plausible script

# DESIGN

- [ ] Post
    - Great typography
    - Incorporates preview image somehow
- [ ] Writing
    - Category: Essay, Presentation, Poem, Interview, Post (default)
    - Show except and preview image
- [ ] Contact
    - Make more fun
- [ ] Speaking
- [ ] Best for me
    - Magazine layout of products
- [ ] About

- Add colophon page


Whoa whoa whoa moment
Initially thought using @screen to define different styles for each breakpoint
But I needed to think in the same way as Tailwind and switch those classes as class attributes


For blog content, I'm going to have to style within the content.
The "Making FitbitOS watchfaces" is a great example. I need to have the grid applied on a row basis in order to properly position image content to the left of the text content. There is an arbitrary number of rows in every article, so I can't use the grid's rows.
Use a data-* attribute on purely aesthetic <div>s?
TODO: remove the generic styling for <article>



Document all the commands to actually deploy:

> ELEVENTY_ENV=development npx @11ty/eleventy --config=eleventy.config.js --serve
> ./node_modules/.bin/postcss css/style.css -o dist/soul-class-style-badass.css
> node generate-redirects.js


npx tailwind build css/style.css -o site/soul-class-style-badass.css


URIs to fix:
http://jeremiahlee.com/blog/2009/10/21/rejoinder-is-whats-hot-in-the-app-store/
http://jeremiahlee.com/blog/2007/09/18/de-facto-social-networks/
http://hire.jeremiahlee.com/
http://dx.jeremiahlee.com/
https://go.jeremiahlee.com/developer-experience/
http://jeremiahlee.com/blog/2010/01/18/lessons-from-bejeweled-blitz/
http://jeremiahlee.com/blog/2005/04/22/it-just-works/
http://jeremiahlee.com/blog/2009/10/05/picking-an-iphone-app-icon-color/?testcode=0318
http://jeremiahlee.com/rsvp/
http://www.jeremiahlee.com/life/2003-Jan.html
http://jeremiahlee.com/blog/2007/09/12/social-network-interoperability/


http://jeremiahlee.com/blog/2009/10​/05/picking-an-iphone-app-icon-colo​r
http://jeremiahlee.com/blog/2004/12​/26/quote
http://jeremiahlee.com/blog/2009/08​/26/eulogy-from-the-unknown-grandso​n


http://jeremiahlee.com/projects/mat​hjungle
http://jeremiahlee.com/projects/for​tune/create.php
http://jeremiahlee.com/blog/2003/04​/16/haiku



Tailwind CSS default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js





https://realfavicongenerator.net/faq
https://developers.google.com/web/fundamentals/web-app-manifest/





12 grid units wide
- by default, immediate children positioned off-center
- Override the default with additional classes
    - left column
    - full width

1 2 3 4 5 6 7 8 9 0 1 2 3
| | | | | | | | | | | | |
 * * *     * * * * *
