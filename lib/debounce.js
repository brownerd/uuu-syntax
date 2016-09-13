'use babel';

// https://davidwalsh.name/javascript-debounce-function
// https://css-tricks.com/debouncing-throttling-explained-examples/

export default (func, wait, immediate) => {
	let timeout = null;
	return function() {
		const CONTEXT = this, ARGS = arguments;
		const LATER = () => {
			if (!immediate) {
        func.apply(CONTEXT, ARGS);
      }
		};
		const CALLNOW = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(LATER, wait);
		if (CALLNOW) {
      func.apply(CONTEXT, ARGS);
    }
	};
};
