'use babel';

// https://davidwalsh.name/javascript-debounce-function
// https://css-tricks.com/debouncing-throttling-explained-examples/

// I updated it for ES6
// // http://jsbin.com/segoyof/3/edit?js,console

export default (func, wait, immediate) => {
	let timeout = null;
	return (function() {

		const LATER = () => {
			if (!immediate) {
        func(...arguments);
      }
		};

		const CALLNOW = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(LATER, wait);

		if (CALLNOW) {
      func(...arguments);
    }

	}).bind(this);
};
