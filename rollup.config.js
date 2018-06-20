// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';

export default [
	{
	  input: 'src/javascript/index.js',
	  output: {
		file: __dirname + 'public/javascript/bundle-es6.js',
		format: 'iife',
		name: 'bundle-es6'
	  },
	plugins: [
		resolve()
	]
	}
]