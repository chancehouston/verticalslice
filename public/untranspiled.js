'use strict';

function thingy() {
	console.log('......module');
}

thingy();
fetch('nothing')
.then(response => response.json());
