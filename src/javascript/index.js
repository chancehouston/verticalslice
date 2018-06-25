import {treeshaketest, otherthing} from './thingy.js';
import init from '../../node_modules/@springernature/global-expandable-box/js/index.js';

var es5test = () => {
	console.log("this arrow function will be transpiled in older browsers, and untranspiled in newer browsers!");
}

var boxArray = Array.from(document.querySelectorAll('.box'));
init(boxArray, undefined, "close", "open");

otherthing();

var es5test = () => {
	console.log("this arrow function will be transpiled in older browsers, and untranspiled in newer browsers!");
}

es5test();

var box = document.querySelector('.box');

 box.addEventListener('open', function(e) {
console.log('opened!!');
})

box.addEventListener('close', function() {
	console.log('closed!!');
})

