# JeremiahLee.com

To deploy:

```
npm run build
cd dist
now --prod
```


To have multiple stylesheets, specify a list of CSS paths in the front matter. Include `default` to include the default stylesheet. Example:

```
css:
    - default
    - ./explicitly-me.css
```
