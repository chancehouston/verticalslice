function treeshaketest() {
	console.log('treeshaking failed');
}

function otherthing() {
	console.log('otherthing');
}

export {treeshaketest, otherthing};
