// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default [
	{
	  input: 'src/javascript/index.js',
	  output: {
		file: __dirname + '/public/untranspiled.js',
		format: 'cjs',
		name: 'untranspiled'
	  }
	},
	{
	  input: 'src/javascript/index.js',
	  output: {
		file: __dirname + 'public/transpiled.js',
		format: 'cjs',
		name: 'transpiled'
	  },
	  plugins: [
		resolve(),
		babel({
		  exclude: ['node_modules/**', ] // only transpile our source code
		})
	  ]
	}
  ]