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

})(window, document);
