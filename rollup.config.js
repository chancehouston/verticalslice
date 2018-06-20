// enables rollup to do node-style 'resolve' of JS modules
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/javascript/index.js',
  output: {
    file: 'public/javascript/bundle-es6.js',
    format: 'iife'
  },
  plugins: [
  	resolve()
  ]
};