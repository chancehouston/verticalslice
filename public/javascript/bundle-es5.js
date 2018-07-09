'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {
	'use strict';

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

	function init(boxes) {
		var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '200px';
		var closetext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Show less';
		var opentext = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Show more';

		boxes.forEach(function (box) {
			var buttonEtc = '<div><div><button type="button" aria-expanded="false"><span>Show more</span></button></div></div>';
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
		});
	}

	function otherthing() {
		console.log('otherthing');
	}

	var es5test = function es5test() {
		console.log('this arrow function will be transpiled in older browsers, and untranspiled in newer browsers!');
	};

	var boxArray = [].concat(_toConsumableArray(document.querySelectorAll('.box')));
	init(boxArray, '0px', 'close', 'open');
	otherthing();
	es5test();
})();
