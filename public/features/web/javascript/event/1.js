/**
 * @class 1
 * @description javascript 事件
 * @time 2015-05-26 12:32
 * @author StarZou
 **/
(function (window, document) {
    'use strict';

    function clickHandler(event) {
        // this 指向当前元素
        console.log(event, this);
    }

    var sureButton = document.querySelector('#btnSure');

    var parent = sureButton;

    while (parent) {
        console.log(parent);
        parent.addEventListener('click', clickHandler);
        parent = parent.parentElement;
    }

    window.onload = function (event) {
        console.log(event);
    };

    /**
     * image load
     * @param event
     */
    function imageLoadHandler(event) {
        console.log('load : ', this);
    }

    var images = document.querySelectorAll('img');
    var index, image;
    for (index = 0; index < images.length; index++) {
        image = images[index];
        image.addEventListener('load', imageLoadHandler);
    }

})(window, document);