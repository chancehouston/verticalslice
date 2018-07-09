import init from '@springernature/global-expandable-box/js';
import {treeshaketest, otherthing} from './thingy';

const es5test = () => {
	console.log('this arrow function will be transpiled in older browsers, and untranspiled in newer browsers!');
};

const boxArray = [...(document.querySelectorAll('.box'))];
init(boxArray, '0px', 'close', 'open');
otherthing();
es5test();
