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

    var scrollButton = document.querySelector('#btnScroll');
    scrollButton.addEventListener('click', function () {
        myScroll();
    });

    function myScroll() {
        var intervalId = setInterval(function () {
            var clientHeight = document.body.clientHeight;
            var innerHeight = window.innerHeight;
            var maxScrollTop = clientHeight - innerHeight;

            var scrollTop = document.body.scrollTop;

            if (scrollTop < maxScrollTop) {
                document.body.scrollTop += 20;
            } else {
                clearInterval(intervalId);
            }
        }, 20);
    }

    document.addEventListener('DOMNodeRemoved', function (event) {
        console.log(event.type, this, event);
    });

    document.addEventListener('DOMNodeInserted', function (event) {
        console.log(event.type, this, event);
    });

})(window, document);

function keyEvent(event) {
    console.log(event.type, event.keyCode, event.key, event.charCode, event.char);
}
