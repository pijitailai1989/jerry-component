/* eslint-disable */
/**
 * @description: 节流
 * @param {Number} delay
 * @param {Boolean} noTrailing
 * @param {Function} callback
 * @param {Boolean} debounceMode
 * @return {Function}
 */
const throttle = (delay, noTrailing, callback, debounceMode) => {
  var timeoutID;
	var lastExec = 0;
	if ( typeof noTrailing !== 'boolean' ) {
		debounceMode = callback;
		callback = noTrailing;
		noTrailing = undefined;
	}
	function wrapper () {
		var self = this;
		var elapsed = Number(new Date()) - lastExec;
		var args = arguments;
		function exec () {
			lastExec = Number(new Date());
			callback.apply(self, args);
		}
		function clear () {
			timeoutID = undefined;
		}
		if ( debounceMode && !timeoutID ) {
			exec();
		}
		if ( timeoutID ) {
			clearTimeout(timeoutID);
		}
		if ( debounceMode === undefined && elapsed > delay ) {
			exec();
		} else if ( noTrailing !== true ) {
			timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
		}
	}
	return wrapper;
}
/**
 * @description: 防抖
 * @param {Number} delay
 * @param {Boolean} [atBegin]
 * @param {Function} callback
 * @return {Function} 防抖的方法
 */
const debounce = (delay, atBegin, callback) => {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}
export {
  throttle,
	debounce
}
