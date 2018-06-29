import init from '@springernature/global-expandable-box/js/index.js';
import {treeshaketest, otherthing} from './thingy.js';

var es5test = () => {
	console.log('this arrow function will be transpiled in older browsers, and untranspiled in newer browsers!');
};

var boxArray = Array.from(document.querySelectorAll('.box'));
init(boxArray, undefined, 'close', 'open');

otherthing();
es5test();
