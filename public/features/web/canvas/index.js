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

var getRandomColor = function () {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
};

(function (window, document) {
    'use strict';

    var displayImage = $('#display');

    var drawingCanvas = $('#drawing');

    var context = drawingCanvas.getContext('2d');

    var saveAsImageButton = $('#saveAsImageButton');

    var fillRectButton = $('#fillRectButton');

    $.on(saveAsImageButton, 'click', function () {
        var imgUrl = drawingCanvas.toDataURL('image/png');
        displayImage.src = imgUrl;
    });

    var x = 20, y = 20, step = 10, w = 64, h = 64;

    $.on(fillRectButton, 'click', function () {
        context.fillStyle = getRandomColor();
        context.fillRect(x, y, w, h);

        x += step;
        y += step;
    });

    console.log(context);

})(window, document);