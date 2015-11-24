//function loaded() {
//  console.log(this);
//}
//
//window.onload = loaded;

/**
 * Polyfill Object.assign
 */
if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (target) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }
        nextSource = Object(nextSource);

        var keysArray = Object.keys(nextSource);
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}

/**
 * 声明
 */

var context = {
  d: document,
  toString: function (object) {
    return Object.prototype.toString.call(object);
  },

  onComplete: function () {
    var progress = document.querySelector('#progress');

    var intervalId = setInterval(increasing, 16);

    function increasing() {
      if (progress.value < progress.max) {
        progress.value = progress.value + 1;
      } else {
        clearInterval(intervalId);
      }
    }
  }
};

Object.assign(window, context);

document.onreadystatechange = function () {
  var readyState = document.readyState;
  console.log(readyState);

  if (readyState === 'complete') {
    context.onComplete();
  }
};