var $ = function(selector, el) {
	if (!el) {el = document;}
	return el.querySelector(selector);
},
$$ = function(selector, el) {
	if (!el) {el = document;}
	return Array.prototype.slice.call(el.querySelectorAll(selector));
},
hasClass = function (el, cl) {
	var regex = new RegExp('(?:\\s|^)' + cl + '(?:\\s|$)');
	return !!el.className.match(regex);
},
addClass = function (el, cl) {
	el.className += ' ' + cl;
},
removeClass = function (el, cl) {
	var regex = new RegExp('(?:\\s|^)' + cl + '(?:\\s|$)');
	el.className = el.className.replace(regex, ' ');
},
toggleClass = function (el, cl) {
	if (hasClass(el, cl))
		removeClass(el, cl);
	else
		addClass(el, cl);
},
next = function (el) {
	var  next = el.nextSibling;
	while (next.nodeType > 1) next = next.nextSibling;
	return next;
},
preventDefault = function(event) {
	if (event.preventDefault) event.preventDefault(); else event.returnValue = false;
},
addEvent = (function () {
	var filter = function(el, type, fn) {
		for ( var i = 0, len = el.length; i < len; i++ ) {
			addEvent(el[i], type, fn);
		}
	};
	if ( document.addEventListener ) {
		return function (el, type, fn) {
			if ( el && el.nodeName || el === window ) {
				el.addEventListener(type, fn, false);
			} else if (el && el.length) {
				filter(el, type, fn);
			}
		};
	}
	return function (el, type, fn) {
		if ( el && el.nodeName || el === window ) {
			el.attachEvent('on' + type, function () { return fn.call(el, window.event); });
		} else if ( el && el.length ) {
			filter(el, type, fn);
		}
	};
})();