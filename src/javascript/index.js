import {treeshaketest, otherthing} from './thingy.js';
import init from './expandable.js';


var boxArray = Array.from(document.querySelectorAll('.box'));
init(boxArray, "55px", "close", "open");

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