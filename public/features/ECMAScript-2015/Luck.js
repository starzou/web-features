/**
 * @module Luck
 * @description Luck工具类
 * @time 2015-12-11 下午2:58
 * @author StarZou
 **/

'use strict';

let Luck = {};

Luck._startTime = new Date().getTime();

(function (global, Luck, undefined) {
  let objectPrototype = Object.prototype,
    toString = objectPrototype.toString;

  Luck.global = global;

  Luck.apply = function (object, config, defaults) {
    if (defaults) {
      Luck.apply(object, defaults);
    }

    if (object && config && typeof config === 'object') {
      let property;
      for (property in config) {
        if (config.hasOwnProperty(property)) {
          object[property] = config[property];
        }
      }
    }

    return object;
  };

  Luck.applyIf = function (object, config) {
    let property;

    if (object) {
      for (property in config) {
        if (config.hasOwnProperty(property) && object[property] === undefined) {
          object[property] = config[property];
        }
      }
    }

    return object;
  };


  Luck.apply(Luck, {
    typeOf(value) {
      return toString.call(value);
    },

    isEmpty(value, allowEmptyString) {
      return (value === null) || (value === undefined) || (!allowEmptyString ? value === '' : false) || (Luck.isArray(value) && value.length === 0);
    },

    isArray: ('isArray' in Array) ? Array.isArray : function (value) {
      return Luck.typeOf(value) === '[object Array]';
    },

    isDate(value) {
      return Luck.typeOf(value) === '[object Date]';
    },

    isRegExp(value) {
      return Luck.typeOf(value) === '[object RegExp]';
    },

    isString(value) {
      return typeof value === 'string';
    },

    isNumber(value) {
      return typeof value === 'number';
    },

    isFunction(value) {
      return typeof value === 'function';
    },

    isBoolean(value) {
      return typeof value === 'boolean';
    },

    isElement(value) {
      return value ? value.nodeType === 1 : false;
    },

    isTextNode(value) {
      return value ? value.nodeName === "#text" : false;
    },

    isDefined(value) {
      return typeof value !== 'undefined';
    },

    isGlobalObject(value) {
      return Luck.typeOf(value) === '[object global]';
    },

    isSimpleObject(value) {
      return value instanceof Object && value.constructor === Object;
    },

    isPrimitive(value) {
      let type = typeof value;

      return type === 'string' || type === 'number' || type === 'boolean';
    },

    isWindow(value) {
      return value instanceof Window && value.constructor === Window;
    },

    now() {
      return Date.now();
    },

    getDate() {
      return new Date();
    },

    runTestClass(testClass, skip) {
      skip = Luck.isDefined(skip) || true;

      for (let key in testClass) {
        let value = testClass[key];

        if (skip && key.startsWith('_')) {
          continue;
        }

        if (Luck.isFunction(value)) {
          value();
        }
      }
    }

  });


})(this, Luck);


