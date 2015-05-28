/**
 * @class index
 * @description canvas使用
 * @time 2015-05-28 08:43
 * @author StarZou
 **/

var $ = window.$ = function (selector) {
    return document.querySelector(selector);
};

$.on = function (element, type, listener) {
    element.addEventListener(type, listener, false);

    return function () {
        element.removeEndEventListener(type, listener);
    };
};

(function (window, document) {
    'use strict';

    var displayImage = $('#display');

    var drawingCanvas = $('#drawing');

    var context = drawingCanvas.getContext('2d');

    var saveAsImageButton = $('#saveAsImageButton');

    $.on(saveAsImageButton, 'click', function () {
        var imgUrl = drawingCanvas.toDataURL('image/png');
        displayImage.src = imgUrl;
    });

    console.log(context);

})(window, document);