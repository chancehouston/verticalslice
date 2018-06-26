# npm scripts

## npm-run-all
npm-run-all is used for a script to run a combination of other scripts. 

instead of
```
    "build": "npm run sass && npm run autoprefixer && npm run rollup && npm run transpilejs",
```
npm-run-all enables the terser
```
"build": "npm-run-all sass autoprefixer rollup transpilejs",
```

## Sass
To avoid the need to specify the node_modules directory for every Sass include, uses --include-path
```
    "sass": "node-sass --include-path='./node_modules' --output-style compressed -o public/css src/sass/style.scss --sourcemap",
```

## Autoprefixer
Autoprefixer is a postCSS plugin that adds vendor prefixes to CSS for wider browser support. 
```
    "autoprefixer": "postcss -u autoprefixer -r public/css/*",
```

## Rollup
Rollup is a simpler alternative to Webpack that will treeshake by default. A rollup.config.js file is necessary for path resolution.
```
    "rollup": "rollup --config --watch",
```

## Closure Compiler
Closure compiler is an alternative to Babel — it transpiles ES6/7/8 etc to ES5. Additionally it optimizes/uglifies/minifies javascript for performance. 
```
    "transpilejs": "./node_modules/google-closure-compiler-js/cmd.js  public/javascript/bundle-es6.js > public/javascript/bundle-es5.js"
```