(function () {
	'use strict';

	function otherthing() {
		console.log('otherthing');
	}

	var openEvent = new Event('open');
	var closeEvent = new Event('close');

	function close(box, scrollIntoView, height, opentext) {
		box.querySelector('[data-expandable-box]').style.height = height;
		box.querySelector('[data-expandable-box]').setAttribute('aria-hidden', true);
		box.querySelector('button').setAttribute('aria-expanded', false);
		box.querySelector('button span').textContent = opentext;
		box.classList.remove('js-expanded');
		box.dispatchEvent(closeEvent);

		if (scrollIntoView) {
			box.scrollIntoView();
		}
	}

	function open(box, closetext) {
		box.querySelector('[data-expandable-box]').style.height = null;
		box.querySelector('[data-expandable-box]').setAttribute('aria-hidden', false);
		box.querySelector('button').setAttribute('aria-expanded', true);
		box.querySelector('button span').textContent = closetext;
		box.classList.add('js-expanded');
		box.dispatchEvent(openEvent);
	}

	function openOrClose(box, height, closetext, opentext) {
		if (box.isOpen) {
			close(box, true, height, opentext);
			box.isOpen = false;
		} else {
			open(box, closetext);
			box.isOpen = true;
		}
	}

	function init(boxes, height = '200px', closetext = 'Show less', opentext = 'Show more') {
		boxes.forEach(box => {
			let buttonEtc = '<div><div><button type="button" aria-expanded="false"><span>Show more</span></button></div></div>';
			box.insertAdjacentHTML('beforeEnd', buttonEtc);
			box.isOpen = false;
			close(box, false, height, opentext);
			box.querySelector('button').addEventListener('click', function () {
				openOrClose(box, height, closetext, opentext);
			});

			Array.from(box.getElementsByTagName('a')).forEach(function (a) {
				a.addEventListener('focus', function () {
					open(box, closetext);
				});
			});
		}
		);
	}

	var es5test = () => {
		console.log("this arrow function will be transpiled in older browsers, and untranspiled in newer browsers!");
	};

	var boxArray = Array.from(document.querySelectorAll('.box'));
	init(boxArray, undefined, "close", "open");

	otherthing();

	var es5test = () => {
		console.log("this arrow function will be transpiled in older browsers, and untranspiled in newer browsers!");
	};

	es5test();

	var box = document.querySelector('.box');

	 box.addEventListener('open', function(e) {
	console.log('opened!!');
	});

	box.addEventListener('close', function() {
		console.log('closed!!');
	});

}());
