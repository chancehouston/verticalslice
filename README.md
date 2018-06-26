# npm scripts

- To avoid the need to specify the node_modules directory for every Sass include, uses --include-path
```
    "sass": "node-sass --include-path='./node_modules' --output-style compressed -o public/css src/sass/style.scss --sourcemap",
```

- Autoprefixer is a postCSS plugin that adds vendor prefixes to CSS for wider browser support. 
```
    "autoprefixer": "postcss -u autoprefixer -r public/css/*",
```

- Rollup is a simpler alternative to Webpack that will treeshake by default. A rollup.config.js file is necessary for path resolution.
```
    "rollup": "rollup --config --watch",
```

- Closure compiler is an alternative to Babel — it transpiles ES6/7/8 etc to ES5. Additionally it optimizes/uglifies/minifies javascript for performance. 
```
    "transpilejs": "./node_modules/google-closure-compiler-js/cmd.js  public/javascript/bundle-es6.js > public/javascript/bundle-es5.js"
```